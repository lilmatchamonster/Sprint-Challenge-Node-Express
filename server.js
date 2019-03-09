const express = require('express');
const helmet = require('helmet');

const actionModel = require('./data/helpers/actionModel_router.js');
const projectModel = require('./data/helpers/projectModel_router.js');

const server = express();
const parser = express.json();

server.use(helmet());
server.use(parser);
server.use('/api/actions', actionModel);
server.use('/api/projects', projectModel);

server.get('/', (req, res) => {
  res.send('<h2>Home Landing Page</h2>');
});

module.exports = server;