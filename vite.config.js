import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sites } from '@openai/sites-vite-plugin';
import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const workerEntrypoint = {
  name: 'karma-kia-worker-entrypoint',
  apply: 'build',
  async closeBundle() {
    const serverDirectory = resolve('dist/server');
    await mkdir(serverDirectory, { recursive: true });
    await copyFile(resolve('src/worker.js'), resolve(serverDirectory, 'index.js'));
  },
};

export default defineConfig({ plugins: [react(), sites(), workerEntrypoint] });
