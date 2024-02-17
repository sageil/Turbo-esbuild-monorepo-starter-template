import { build } from "esbuild";
import fg from "fast-glob";

export async function buildBrowser  ({ ...options  }) {
 
  await build({
    entryPoints: await fg("src/**/*.ts"),
    platform: "browser",
    target: "es6",
    format: "iife",
    bundle: true,
    outdir: "./dist",
    sourcemap: false,
    logLevel: "info",
    ...options,
  });
};
