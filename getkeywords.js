const request = require('request');
const fs = require('fs');

// The bunch of keyword things I can do are:
/*
platforms, instruments, projects, temporal_keywords, location_keywords, science_keywords, archive_centers, and data_centers
*/
const keywords = ["platforms", "instruments", "projects", "temporal_keywords", "location_keywords", "science_keywords", "archive_centers"];

let url = "https://cmr.earthdata.nasa.gov/search/keywords/" + keywords [0];


var filename = "keywords-" + keywords[0] + ".ndjson"
var writestream = fs.createWriteStream(filename)



request(url, cb);

function cb (err, res, body){
  if(err){
    console.log(err);
    throw err;
  }
//  console.log('req succusss!!!, ', res)
  console.log( JSON.parse(body) );
  for(i of JSON.parse(body).category ){//body.category){
  //  console.log(JSON.stringify(i) + '\n')
    writestream.write(JSON.stringify(i) + '\n')
  }

  writestream.end();
}
