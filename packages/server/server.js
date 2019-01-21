const express = require('express');
const path = require('path');

const port = process.env.PORT || 5454;

const server = express();

const health = require('./routes/health');

server.get('/', (req, res) => {
    res.send(202, { "body": "Well, hello there..." });
});

server.get('/health', health.ping);

server.listen(port, (error) => {
    if( error ) {
        console.error(
            'An error has occured in the server: ',
            error
        );
    }

    console.log(`Server is listening on port ${port}...`);
});