#!/usr/bin/env node

import { build } from 'vite'
import { build as esbuild } from 'esbuild'
import fs from 'fs'
import path from 'path'

async function buildForProduction() {
  console.log('🏗️  Building Sehha+ for production...')
  
  try {
    // Build frontend
    console.log('Building frontend...')
    await build({
      build: {
        outDir: 'dist',
        emptyOutDir: true
      }
    })

    // Build backend
    console.log('Building backend...')
    await esbuild({
      entryPoints: ['server/index.ts'],
      bundle: true,
      outfile: 'dist/server.js',
      platform: 'node',
      target: 'node18',
      format: 'esm',
      external: [
        '@neondatabase/serverless',
        'ws',
        'pg-native'
      ]
    })

    console.log('✅ Build completed successfully!')
    console.log('📁 Files ready in ./dist directory')
    
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

buildForProduction()