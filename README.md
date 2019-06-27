# tinyPNG-butch-process
Node module that uses TinyPNG API to optimize files 

# Using

## pre-config
*Open tinyPNG-butch.js 
* provide your API key under:
```javascript
// IMPORTANT!
// set your unique TinyPNG key
tinify.key = "REPLACE_WITH_TINY_PNG_API_KEY!!!";
```
## Run
Run command in the folder where png files are stored
```javascript
npm install --save tinify
node tinyPNG-butch.js // run actual script
```

## Run properties
You can specify format of the files that will be send to compression
currently supported formats are png and jpg
by default script selects png files
```javascript
node tinyPNG-butch.js jpg
```
## Notes
After ruining the script original files are going to be copied to the backup folder named `org`




