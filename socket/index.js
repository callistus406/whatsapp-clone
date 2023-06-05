const io = require('socket.io')(8900, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
let users = [];
const addUser = (userId, socketId) => {
  console.log(userId, socketId);
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (socketId) => {
  users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  // console.log(userId);
  console.log('users');
  users.find((user) => console.log(user.userId === userId));
  return users.find((user) => user.userId === userId);
  // return users.find((user) => user.userId !== userId);
};

io.on('connection', (socket) => {
  console.log('a user connected');
  // io.emit('welcome', 'hello everyone this is from socket {message}');
  //get user id and socket id from socket
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('getUsers', users);
  });
  //send and ge!
  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    console.log('......yuui..........');
    const user = getUser(receiverId);
    console.log({ senderId, receiverId, text });
    console.log('......yuui.........ggfgf.');
    console.log(receiverId);
    console.log('......yuui.........ggfgf....fdfdfd.');
    console.log(user);
    io.to(user?.socketId).emit('getMessage', {
      senderId,
      text,
    });
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
    removeUser(socket.id);
    io.emit('getUsers', users);
  });
});
