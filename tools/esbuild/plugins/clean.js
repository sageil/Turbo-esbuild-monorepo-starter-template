import  { rm } from "fs/promises";
import fs from "fs"
import path from 'path';
export const clean = (pathtoClean) => ({
  name: "clean",
  setup({ onStart }) {
    onStart(async () => {
      
      try {
        const isDirectory = fs.lstatSync(pathtoClean).isDirectory();
        if(!isDirectory){
        pathtoClean=path.dirname(pathtoClean)
        }
        await rm(pathtoClean, { recursive: true });
      } catch  {
       
      }
    });
  },
});
