import { build } from "esbuild";
import fg from "fast-glob";
import { clean } from "./plugins/clean.js";
import esbuildPluginTsc from "esbuild-plugin-tsc";
import { typecheckPlugin } from "@jgoz/esbuild-plugin-typecheck";

export async function buildNode({ ...options }) {
  const toDelete =options.outdir?? options.outfile;
  
  await build({
    entryPoints: await fg("src/**/*.ts", {
      ignore: ["src/**/*.test.ts", "src/**/*.spec.ts", "tests/**/*.ts"],
    }),
    write: true,
    platform: "node",
   
    bundle: true,
    minify: true,
    packages: "external",
    legalComments: "none",
    treeShaking: true,
    plugins: [
      clean(toDelete),
      esbuildPluginTsc({ force: true }),
      typecheckPlugin({ omitStartLog: true }),
    ],

    ...options,
  });
}
