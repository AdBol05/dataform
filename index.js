const fs = require("fs");
let file = fs.readFileSync("/media/adam/SHARED/NodeJS/dataform/data.csv").toString("utf-8");

console.log("reading data...");

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

console.log("processing...");
console.log(file);

fs.writeFileSync("dataExport.csv", file);

console.log("data written to dataExport.csv")