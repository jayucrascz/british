const { io } = require('../index');

io.on('connection', socket => {

    console.log('Nuevo Dispositivo Conectado');

    socket.on('disconnect', () => {
        console.log('Dispositivo Desconectado');
    });

    socket.on('emitir-llamado-estudiante', (payload) => {
        io.sockets.emit('nuevo-llamado-estudiante', payload);
    });

    socket.on('emitir-salida-estudiante', (payload) => {
        io.sockets.emit('nueva-salida-estudiante', payload);
    });

    socket.on('emitir-confirmacion-salida-estudiante', (payload) => {
        io.sockets.emit('confirmado-salida-estudiante', payload);
    });

    socket.on('emitir-responsable-temporal', (payload) => {
        io.sockets.emit('nuevo-responsable-temporal', payload);
    });

});