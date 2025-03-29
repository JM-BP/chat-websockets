const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

//Lista para almacenar clientes conectados
const clients = [];

//Manejamos cunado un cliente se conecta
server.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");
  //Agregamos el cliente a la lista
  clients.push(socket);

  //Manejamos cuando el servidor recibe un mensaje de un cliente
  socket.on("message", (message) => {
    console.log(`Mensaje recibido: ${message}`);
    //Enviamos el mensaje a todos los clientes conectados
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  //Manejamos cuando un cliente se desconecta
  socket.on("close", () => {
    console.log(`Cliente desconectado`);
    //Eliminamos el cliente de la lista
    const index = clients.indexOf(socket);
    if (index !== -1) {
      // Aseguramos que el cliente esté en la lista antes de eliminarlo
      clients.splice(index, 1);
    }
  });
});

console.log("Servidor WebSocket corriendo en ws://localhost:8080");
