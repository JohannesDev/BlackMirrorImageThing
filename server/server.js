let id = document.getElementById("key").value;

var peer = new Peer();

var connection = peer.connect(id);

connection.on('open', function () {
    // here you have conn.id
    connection.send('hi!');
});