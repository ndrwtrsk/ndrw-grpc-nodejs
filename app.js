var PROTO_PATH = __dirname + '/helloworld.proto';
var grpc = require('grpc');
var protoDescriptor = grpc.load(PROTO_PATH);
var helloworld = protoDescriptor.helloworld;

console.log( helloworld)


function getServer() {
  var server = new grpc.Server();
  server.addService(helloworld.Greeter.service, {
    sayHello: function (call, callback) {
    	console.log(call)
    	console.log('before cb')
    	callback(null, function(){
    		var hellorequest = call.request
    		var response = {
    			message: hellorequest.name
    		}
    		console.log("resp", response)
    		return response;
    	}.call())

    }
  });
  return server;
}

var routeServer = getServer();
routeServer.bind('0.0.0.0:6565', grpc.ServerCredentials.createInsecure());
routeServer.start();

