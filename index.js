'use strict';

var Swagger = require('bitmex-swagger');
var WebSocket = require('bitmex-websocket');

module.exports = function(callback) {

    Swagger(function(swagger) {
        WebSocket(function(websocket) {
            callback({
                swagger: swagger,
                websocket: websocket
            })
        })
    })

};
