const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    const nameInsert = req.teamName ? ` ${req.teamName}` : '';
  
    res.send(`
    <h2>Heorhii Hubs API</h2>
    <p>Welcome ${nameInsert} to the Heorhii Hubs API</p>
    `);
  });


module.exports = server;
