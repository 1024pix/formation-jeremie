const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
  port: process.env.PORT || 3000
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, h) {

    return 'hello world';
  }
});

module.exports = server;