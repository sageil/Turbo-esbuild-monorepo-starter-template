import { buildNode } from '@repo/tools/esbuild';
import path from 'path';
const distPath = path.resolve('./dist');
await buildNode({
  logLevel: 'silent',
  outdir: distPath,
  tsconfig: './tsconfig.json',
  format: 'cjs',
  drop: ['console', 'debugger'],
  outExtension: { '.js': '.cjs' }
});
