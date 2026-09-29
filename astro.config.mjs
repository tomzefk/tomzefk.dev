// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import { fileURLToPath } from "node:url";

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@styles": fileURLToPath(
                    new URL("./src/styles", import.meta.url)
                ),
            },
        },
    },
});
