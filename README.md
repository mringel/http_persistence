# HTTP Server with Simple Persistence
** Matthew Ringel **  
** sea-d45-javascript **  
** 10 November 2015 **

HTTP Server has two routes

GET request to /file/[filename] will return the JSON data from the previously stored file

POST request to /receive with JSON data will store the JSON data in a filename from the "name" field in the posted data.  

For example:

```superagent localhost:3000\receive '{"name": "myJSON"}'```

will store the JSON data in a file named "myJSON".

This HTTP server stores and looks for files in a directory named "files" at the root level.  This directory must exist for the HTTP server to function.
