import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
    entry: ['bin/bannerlord-helper.ts'],
    format: ['esm'],
    outDir: 'dist',
    target: ['esnext'],
    bundle: true,
    clean: !opts.watch,
    minify: false,
    treeshake: opts.watch ? false : 'smallest',
    splitting: false,
    cjsInterop: true,
    legacyOutput: false,
    dts: true,
}));
