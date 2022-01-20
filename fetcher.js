//  this app should take on the command line the URL and the a local file path. it should retrieve downloaded status and file size

// example
//> node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

//code starts here
const request = require(`request`);
const fs = require(`fs`);

// Command line inputs, url and local path, in that order.
const URL = process.argv[2];
const localFilePath = process.argv[3];

request(URL, (error, response, body) => {
  if (error)
    console.log(`There is an error`, error);
  console.log(`status code`, response && response.statusCode);

  // Saving the file to a local directory. append adds to an existing file or creates if non-existing.
  fs.appendFile(localFilePath, body, (err) => {
    if (err) {
      console.log("Error appending file to local file path");
      throw err;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
  });

});