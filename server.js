const StaticServer = require('static-server');

const server = new StaticServer({
  rootPath: './samples', // required, the root of the server file tree
  port: 8080, // required, the port to listen
  cors: '*', // optional, defaults to undefined
});

server.start(() => {
  // eslint-disable-next-line no-console
  console.log('Server listening to', server.port);
});
