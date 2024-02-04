const typecheckPlugin =
  require("@jgoz/esbuild-plugin-typecheck").typecheckPlugin;
  
module.exports = {
  esbuild: {
   
    minify: false,
    format: "cjs",
    platform: "node",
    packages: "external",
    sourcemap: true,
   
  },

  prebuild: async () => {
    typecheckPlugin({ watch: true, omitStartLog: false })
  },

  postbuild: async () => {
   
  },
};
