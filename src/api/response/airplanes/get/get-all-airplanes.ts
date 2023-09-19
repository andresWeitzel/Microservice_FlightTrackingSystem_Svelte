//External
const fs = require("fs");
//Const-vars
let msg;
let data:any=[];
let dir = "../../../../api/data/airplanes.json";

/**
 * @description This function responsible for asynchronously reads the entire contents of a file
 */
export const getFileDataFromPath = async () => {
    try {
        fs.readFile(dir, (err:any, i:any) => {
            if (err){
              console.log(err);
              return null;
            } 
            data.push(i);
            console.log(data);
        });
        return data;
    } catch (error) {
      msg = `Error in getFileDataFromPath() function. Caused by ${error}`;
      console.log(msg);
    }
  };

getFileDataFromPath();
