const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Nikolai Telsa',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    }
    {
        id: 2,
        name: 'Albert Einstein',
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/'); //remove / and create an array

    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    }

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}....`)
    });