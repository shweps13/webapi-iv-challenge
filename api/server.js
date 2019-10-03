const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    const nameInsert = req.teamName ? ` ${req.teamName}` : '';
    const yourData = process.env
    res.send(`
    <h2>Heorhii Hubs API</h2>
    <p>Hello ${yourData.USER}</p>
    <p>Welcome ${nameInsert} to the Heorhii Hubs API on port ${yourData.PORT}</p>
    `);
  });


module.exports = server;
