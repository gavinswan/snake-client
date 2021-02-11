
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}
const handleUserInput = function(input) {
  switch (input) {
    case '\u0003':
      process.exit();
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'n':
      connection.write('Say: Not that way!');
      break;
    case 'm':
      connection.write('Say: Other way you dummy!');
      break;
  }
}
module.exports = {setupInput};