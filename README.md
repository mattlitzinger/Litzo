# Litzo API Endpoints
Litzo is a URL shortener with public API endpoints. 

## Links
__GET Requests__  
Retrieve information about a link by using the following URL: `GET http://api.litzo.us/links/[LINK_ID]` Returns a JSON object containing the url, code, timestamp and clicks associated with the link.

__POST Requests__  
Create a new short link from a given URL by using the following URL: `POST http://api.litzo.us/links/` with a `url` parameter containing the URL to be shortened. Returns a JSON object containing the url, code, timestamp and clicks associated with the link.