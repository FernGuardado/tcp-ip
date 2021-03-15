
const net = require('net');
const promt = require('prompt-sync')({sigint:true});

const server = net.createServer(conn => {

    console.log('Client Connected');

    conn.on('data', data => {
        conn.write(data + '\r\n');
    });

    conn.on('end', () => {
        console.log('Client Closed');
    });

    conn.on('error', error => {
        conn.write("Connection Error, ");
    })
});

server.listen(5000);