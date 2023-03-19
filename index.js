const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',//responds with JSON
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Sir Isaac Newton',
    }));
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}....`)
});