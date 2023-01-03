import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
});

const users = []

io.on("connection", (socket) => {

    socket.on('join', (payload) => {
        users[socket.id] = payload
        console.log(payload + ' has joined the chat')
        socket.broadcast.emit('joined', `${payload} has joined the chat`)

        socket.on('disconnect', () => {
            console.log(`${users[socket.id]} has left the chat`)

            socket.broadcast.emit('disconne', `${users[socket.id]} has left the chat`)
        })


    })

    socket.on('chat', ({ username, msg }) => {
        console.log(username, msg)

        socket.emit('chat', { username, msg })
    })

});


httpServer.listen(8080, () => {
    console.log('Socket is here')
});