import type { Options } from "tsup";

export const tsup: Options = {
	splitting: false,
	sourcemap: false,
	clean: true,
	dts: true,
	format: ["cjs"],
	minify: false,
	bundle: true,
	skipNodeModulesBundle: true,
	entryPoints: ["src/index.ts"],
	watch: false,
	target: "es2020",
	outDir: "lib",
	entry: ["src", "!src/__tests__/**"],
};
