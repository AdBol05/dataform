//by Adam Bolemant @ Laborky.cz

//Astropi data.csv conversion
//Due to lack of time in development, some Astropi projects have a messy output in data.csv.
//This script is used to clean the file from addition characters, leaving clean data that can be further processed.

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const directory = args[0];

console.log('reading file on path: %s', directory);
let file = fs.readFileSync(directory).toString("utf-8");

console.log("processing...");

file = file.replace("Compass(raw)", "Compass X, Compass Y, Compass Z");
file = file.replace("Accelerometer", "Acc Roll, Acc Pitch, AccYyaw");
file = file.replace("Accelerometer(raw)", "AccRaw X, AccRaw Y, AccRaw Z");
file = file.replace("Gyro", "Gyro Roll, Gyro Pitch, Gyro Yaw");
file = file.replace("Gyro(raw)", "GyroRaw X, GyroRaw Y, GyroRaw Z");
file = file.replace("Orintation", "Orientation Roll, Oricaentation Pitch, Orientation Yaw");

file = file.replace("coordinates", "Latitude, Longitude, Elevation");
file = file.replace("magnetometer", "Magnetometer X, Magnetometer Y, Magnetometer Z");

file = file.replaceAll("\"\{'x': ", "");
file = file.replaceAll(" 'y': ", "");
file = file.replaceAll(" 'z': ", "");
file = file.replaceAll("\"\{", "");
file = file.replaceAll("\}\"", "");
file = file.replaceAll("'roll': ", "");
file = file.replaceAll(" 'pitch': ", "");
file = file.replaceAll(" 'yaw': ", "");

file = file.replaceAll("IERS2010 latitude ", "");
file = file.replaceAll(" longitude ", ",");
file = file.replaceAll(" elevation ", ",");
file = file.replaceAll(" m,", ",");

fs.writeFileSync("dataExport.csv", file);

console.log("data written to: %s/dataExport.csv", path.dirname(__filename));
process.exit(0);

/*
After the file has been cleaned, the output is written to dataExport.csv file.
This file is created in the script's directory.
WARNING:If the file dataExport.csv already exists, it will be overwritten!
        Always rename or move this file before cleaning another.
*/
