
const net = require('net');
var ip = require('ip');
const prompt = require('prompt-sync')({sigint:true});

const options = {
    port: 5000
};

const client = net.createConnection(options, () => {
    client.write("Server is working, connected to " + ip.address()+":" + 
    options.port+"\r\n");
});

client.on('data', data => {
    console.log(data.toString());
});
process.on('uncaughtException', function (err) {
    console.log(err);
});