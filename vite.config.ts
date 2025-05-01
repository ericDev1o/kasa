import react from '@vitejs/plugin-react';
import { UserConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default {
    plugins: [
        react(),
        nodePolyfills({
            include: ['path', 'process', 'util'],
        }),
    ],
    optimizeDeps: {
        include: ['path'],
    },
    /*build: {
        rollupOptions: {
            external: ['path'],
            output: {
                globals: {
                    path: 'path',
                },
            },
        },
    },*/
} satisfies UserConfig;
