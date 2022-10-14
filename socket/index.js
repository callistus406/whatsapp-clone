// const { Server } = require('socket.io');
// const io = new Server(8900, {
//   cors: {
//     origin: 'http://localhost:3000',
//   },
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   io.emit('welcome', 'hello everyone this is from socket');
// });

const io = require('socket.io')(8900, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

io.on('connection', (socket) => {
  console.log('a user connected');
  // io.emit('welcome', 'hello everyone this is from socket {message}');
  //
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('getUsers', users);
  });
  socket.on;
});
