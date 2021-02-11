const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    // host: 'localhost',
    // port: 50541
    // host: IP.host,
    // port: PORT.port
    ...IP,
    ...PORT
  });
  conn.on('connect', (connect) => {
    console.log('Successfully connected to game server');
    // conn.write('Move: up');
  })
  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
  });
  conn.on('connect', (connect) => {
    conn.write('Name: GTS');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = {connect};