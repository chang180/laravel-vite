import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from'@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // 'resources/css/app.css',
                'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false
                },
            }
        }),
    ],
    resolve: {
        alias: {
            '@comps': '/resources/js/components',
            '@css': '/resources/css',
            '@images': '/resources/images',
        },

        // [
        //     { find: '@', replacement: '/resources/js' },
        //     { find: '@comps', replacement: '/resources/js/components' },
        //     { find: '@css', replacement: '/resources/css' },
        //     { find: '@images', replacement: '/resources/images' },
        // ]
    },
});
