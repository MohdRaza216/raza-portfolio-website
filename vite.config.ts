
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contentCollections from '@content-collections/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    contentCollections(),
    tailwindcss(),
    tanstackStart(),
    netlify(),
    viteReact(),
  ],
})

export default config
