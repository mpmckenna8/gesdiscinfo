GESDISC basic information:
Goddard Earth Sciences Data and Information Services Center
https://daac.gsfc.nasa.gov/


# Scripts so far

### getkeywords.js
Will make a keywords-platforms.ndjson file which will contain all json objects of all the keywords you can use if you want to filter by keyword. An example object is:

Each line is a platform with a lot of subfields.

### getcollections.js

It is designed to make a series of requests paginating 1000 results at a time and going until a request returns 0 results.

A .ndjson file will be made with each line being a json object with all the data about each collection.

It may work without the downloadable=true querystring but will make a super big file with a lot of info about data which isn't very accessible.

### todo thing to get granule data.

# Various notes and helpful links

Very basic Acronym list:
https://earthdata.nasa.gov/user-resources/acronym-list


Glossary also helps with some of the unique vocab:
https://earthdata.nasa.gov/user-resources/glossary



The main things to get metadata about seem to be collections and granules.  Where collections are big groups of related datasets and studies and granules are the individual things.


The metadata for all the stuff is in a Common Metadatarepository for which there's pretty good technical docs https://wiki.earthdata.nasa.gov/display/CMR/Client+Developer+User+Guides+-+API+-+Technical+Documentation

Docs for the search api:
https://cmr.earthdata.nasa.gov/search/site/search_api_docs.html

To get a bunch of collections:
https://cmr.sit.earthdata.nasa.gov/search/collections.json


To find the downloadable ones:
https://cmr.earthdata.nasa.gov/search/collections?downloadable=true

Can add things to increase the number of results returned and to page through them.


big liimitation seems to be: You can not page past the 1 millionth item. Please contact the CMR Team through the CMR Client Developer Forum if you need to retrieve items in excess of 1 million from the CMR. Additionally granule queries which do not target a set of collections are limited to paging up to the 10000th item.


Can provide a sort key.


To like page though all the downloadable collections:
https://cmr.sit.earthdata.nasa.gov/search/collections.json?page_size=1000&downloadable=true&page_num=2
With 1000 page size there's less then 10 pages so it should be ok.

to get keywords to filter by:
https://cmr.earthdata.nasa.gov/search/keywords/instruments
https://cmr.earthdata.nasa.gov/search/keywords/instruments?pretty=true

you can get all kinds of fields like:
platforms, instruments, projects, temporal_keywords, location_keywords, science_keywords, archive_centers, and data_centers. The endpoint also supports providers which is an alias to data_centers and spatial_keywords which is an alias to location_keywords.



For getting all the data about granules it may be trickier as there're more of them.  But as each one is like a document, some of them in the same collection should share a lot of metadata and only differ in like timestamps and location data.
