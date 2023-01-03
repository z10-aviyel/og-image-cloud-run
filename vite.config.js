// @ts-check
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  optimizeDeps: { disabled: true },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      // tell the plugin where is your project entry
      appPath: './src/index.ts',
      // the name of named export of you app from the appPath file
      exportName: 'default',
    }),
  ],
});
