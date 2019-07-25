# book-store

This is sample implementation of book store using REST-API and node js with typescript

# clear data
Remove sql lite data -  data.sqlite

# install
npm install

# Compilation
npm run tsc



# How To Launch
node .\build\app.js

ALL Rest API


# Request samples
1. Create new book
HTTP VERB  - POST:
request :
uri - http://localhost:3000/books - 
body: 

{
    "isbn": "978-1-56619-909",
    "subTitle": "Title1",
    "title": "Title1424"
}
- with validation isbn


2. Update Book
HTTP Verb - PUT
request:
id - id of book- not ISBN
uri: http://localhost:3000/books/id

Body:

{
    "isbn": "978-1-56619-909",
    "subTitle": "Title1",
    "title": "Title142433"
}

3. Delete
HTTP VERB : DELETE
request:
id - id of book- not ISBN
uri : http://localhost:3000/books/id
without Body


4. List All Books
HTTP Verb - GET
request:
http://localhost:3000/books

Return list of all Books without paging

#Notes:

I am using sqlite and it is not supporting all typeorm configuration

1. I am not handling full validation for ISBN during update - not described

2.  I had issues with json-object-mapper - for some reason runtime exception about missing method 
had to implement ObjectMapper as static class - will be remove if ObjectMapper library will work

3.  Validator - need to figure out why validation library that I used throws exception about missing class - implement separate service for this - can be removed - I didn't have time

