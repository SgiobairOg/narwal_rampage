const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5454;

const server = express();

const health = require('./routes/health');
const vcard = require('./routes/vcard');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/health', health.ping);
server.get('/card', vcard.render);

server.listen(port, (error) => {
    if( error ) {
        console.error(
            'An error has occured in the server: ',
            error
        );
    }

    console.log(`Server is listening on port ${port}...`);
});