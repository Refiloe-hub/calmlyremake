import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        const text = message.toString().toLowerCase();
        console.log(`Received: ${text}`);

        // Define responses based on the received message
        let response;
        if (text === "hi" || text === "hello") {
            response = "Hello! How can I assist you today?";
        } else if (text.includes("how are you")) {
            response = "I'm just a bot, but I'm doing great! How about you?";
        } else if (text.includes("bye")) {
            response = "Goodbye! Have a great day!";
        } else {
            response = "I'm not sure how to respond to that, but I'm here to chat!";
        }

        // Send response back to client
        ws.send(response);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});