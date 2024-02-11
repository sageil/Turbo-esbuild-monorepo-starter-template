import { buildBrowser } from '@repo/tools/esbuild';
import path from 'path';
const distPath = path.resolve('./dist');
await buildBrowser({
  logLevel: 'silent',
  tsconfig: './tsconfig.json',
  outdir: distPath,
  format: 'esm',
  drop: ['console', 'debugger']
});
