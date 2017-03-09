
module.exports = function (io, db, nconf) {
  io.on("connection", function (socket) {
    //Example Socket Call
    socket.on('sample_socket_call', function (data) {
        console.log("Sample socket data: "+ data.message)
        io.to(socket.id).emit('sample_socket_response', {'message':'sample response'});
    });
  });
};