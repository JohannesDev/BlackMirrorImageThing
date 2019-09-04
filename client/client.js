var peer = new Peer();

peer.on('open', function (id) {
    document.getElementById("displayID").innerHTML = "ID: " + id;
});


peer.on('connection', function (conn) {
    conn.on('data', function (data) {
        alert(data);
    });
});

