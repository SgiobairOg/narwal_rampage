const express = require('express');
const path = require('path');

const port = process.env.PORT || 5454;

const server = express();

server.get('/', (req, res) => {
    res.send(202, { "body": "Well, hello there..." });
});

server.listen(port, (error) => {
    if( error ) {
        console.error(
            'An error has occured in the server: ',
            error
        );
    }

    console.log(`Server is listening on port ${port}...`);
});