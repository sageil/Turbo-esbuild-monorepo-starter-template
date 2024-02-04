import { buildNode } from '@repo/tools/esbuild';
import path from 'path';
const distPath = path.resolve('./dist/index.cjs');
await buildNode({
  logLevel: 'silent',
  outfile: distPath,
  tsconfig: './tsconfig.json',
  format: 'cjs',
  drop: ['console', 'debugger']
});
