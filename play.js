const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let connectResult = connect();

setupInput(connectResult);
