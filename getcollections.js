// This script will go through and make a ndjson (newline delimited json) file of all the downloadable collections from nasa:
/*can instead of filtering by downloadable=true you could also add querystrings for kewords below and you can get some values to filter With
using the getkeywords.js file.
platforms, instruments, projects, temporal_keywords, location_keywords, science_keywords, archive_centers, and data_centers
*/
const request = require('request');
const fs = require('fs');


let url = "https://cmr.earthdata.nasa.gov/search/collections.json?downloadable=true&page_size=1000&page_num=";


let filename = "downloadable-collections.ndjson"
var writestream = fs.createWriteStream(filename)

reqcollection(1)


function reqcollection(i){
  request(url + i, cb);
}

function cb (err, res, body){
  if(err){
    console.log(err);
    throw err;
  }
//  console.log('req succusss!!!, ', res)
  var entries = JSON.parse(body).feed.entry;

  for(o of JSON.parse(body).feed.entry){
  //  console.log(o)
    writeobj(JSON.stringify(o) + '\n');
  }
  console.log(entries.length, index)
  if(entries.length > 0){
    reqcollection(i + 1);
  }
  else{
    writestream.end();
    console.log('done paging through there should be a file called ' + filename + ' in this directory now.')
  }
}


function writeobj(d){
  writestream.write(d);
}
