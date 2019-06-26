/*
 * @author Karol Bednarz
 * @version 1.0
 * script for optimizing png files using TinyPNG api
 */

//required modules
const path = require('path');
const fs = require('fs');
const tinify = require("tinify");

// IMPORTANT!
// set your unique TinyPNG key
tinify.key = "REPLACE_WITH_TINY_PNG_API_KEY!!!";

//path for original photos
var dir = './org';

// create directory for original files
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

//search for all files in current directory
const directoryPath = path.join(__dirname, './');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // process only files with the .png extension
        if (file.indexOf('.png') != -1){
            processFile(file);
        }
    });
});

/*
 * @processFile is moving original file to org folder and using tinypng API to optimize the file
 * @param filename - name of the file that has to be optimized
 */
function processFile(filename) {
    console.log('Process file: ' + filename);
    var oldPath = filename;
    var newPath = 'org/' + filename;

    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
		
		// after moving 
        const source = tinify.fromFile("org/" + filename);
        source.toFile(filename);
    })
}
