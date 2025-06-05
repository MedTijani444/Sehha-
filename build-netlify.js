#!/usr/bin/env node

import { build } from 'vite'
import { build as esbuild } from 'esbuild'
import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'

const require = createRequire(import.meta.url)

async function buildForNetlify() {
  console.log('Building frontend...')
  
  // Build frontend
  await build({
    build: {
      outDir: 'dist/client',
      emptyOutDir: true
    }
  })

  console.log('Building backend for Netlify functions...')
  
  // Build backend as Netlify function
  await esbuild({
    entryPoints: ['server/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    platform: 'node',
    target: 'node18',
    format: 'cjs',
    external: [
      '@neondatabase/serverless',
      'ws',
      'pg-native'
    ],
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  })

  // Create Netlify function wrapper
  const functionWrapper = `
const { handler } = require('./index.js');

exports.handler = async (event, context) => {
  return await handler(event, context);
};
`

  fs.writeFileSync('dist/netlify-function.js', functionWrapper)
  
  console.log('Build complete!')
}

buildForNetlify().catch(console.error)