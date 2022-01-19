
// men setup server dengan express
const express = require("express");
const server = express();

// setup websocket
const { WebSocketServer, WebSocket } = require("ws");

server.use(express.static(__dirname+"/www"));

const Server = server.listen(8000,()=>{

	console.log("server berjalan");

});

const wss = new WebSocketServer({
	server: Server
});

wss.on("connection",(ws)=>{

	ws.on("message",(dataYangDiKirim)=>{

		try{

			const data = JSON.parse(dataYangDiKirim);

			wss.clients.forEach(function each(client) {
		      if (client.readyState === WebSocket.OPEN) {
		        client.send(data.pesan, { binary: false });
		      }
		    });

		}catch(err){

			console.log(err);

		}

	});

});