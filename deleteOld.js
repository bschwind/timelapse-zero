var fs = require("fs");

var maxAge = 172800; // 2 days in seconds
var baseDir = "/home/pi/camera";
var now = +new Date();
now = now / 1000;

var files = fs.readdirSync(baseDir);

files.map(function (f) {
    // Convert to number
    return {
        file: f,
        num: Number(f.split(".").shift())
    };
})
.filter(function (f) {
    // Remove NaN
    return !isNaN(f.num);
})
.filter(function (f) {
    // Filter out dates that are two days or younger
    return now - f.num > maxAge;
})
.forEach(function (f) {
    // Delete the files older than maxAge
    fs.unlinkSync(baseDir + "/" + f.file);
});
