/*jslint node: true */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5454;

const server = express();

const health = require('./routes/health');
const vcard = require('./routes/vcard');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/health', health.ping);
server.get('/card', vcard.render);

server.listen(port, error => {
    if (error) {
        // eslint-disable-next-line no-console
        console.error('An error has occured in the server: ', error);
    }

    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${port}...`);
});
