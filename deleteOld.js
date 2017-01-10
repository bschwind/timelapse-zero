var fs = require("fs-extra");
var moment = require("moment");

var maxAge = 172800; // 2 days in seconds
var cutoffTime = moment().startOf("day").subtract(2, "days");
var baseDir = "/home/pi/camera";
var now = +new Date();
now = now / 1000;

var files = fs.readdirSync(baseDir);

files.map(function (f) {
    return {
        fullPath: baseDir + "/" + f,
        dirName: f
    };
})
.filter(function (f) {
    // Only allow directories with a date pattern
    return fs.lstatSync(f.fullPath).isDirectory() && /\d{4}_\d{2}_\d{2}/.test(f.dirName);
})
.filter(function (f) {
    // Only allow directories older than two days
    return moment(f.dirName, "YYYY_MM_DD").isBefore(cutoffTime);
})
.forEach(function (f) {
    console.log("Delete " + f.fullPath);
    // Delete the older directories
    fs.emptyDirSync(f.fullPath);
    fs.rmdirSync(f.fullPath);
});
