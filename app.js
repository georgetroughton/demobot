// Requirements
"use strict";
const restify = require('restify');
const builder = require('botbuilder');

// Set up restify server
const server = restify.createServer();
server.listen(process.env.PORT || 3000, function() {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
const connector = new builder.ChatConnector({
  appId: 'YourAppId',
  appPassword: 'YourAppPassword'
});

const bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {
  session.send("Hello World");
});
