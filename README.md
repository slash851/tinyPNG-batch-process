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
npm install //installing depending modules
node tinyPNG-butch.js // run actual script
```

## Notes
After ruining the script original files are going to be copied to the backup folder named `org`




