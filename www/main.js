// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8000');

const ws = new Promise((res,rej)=>{

    socket.addEventListener('open', function (event) {
        res(socket);
    });

});

document.querySelector("#kirim").onclick = async ()=>{

    const pesan = document.querySelector("#pesan");
    const wss = await ws;

    wss.send(JSON.stringify({
        pesan: pesan.value
    }));

}

socket.addEventListener('message', function (event) {

    document.querySelector('#message').innerHTML += `

        <p>${event.data}</p>

    `;

});