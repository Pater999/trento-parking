import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        exclude: [],
        root: "src/__tests__",
        setupFiles: ["setup.ts"],
        silent: false
    },
})