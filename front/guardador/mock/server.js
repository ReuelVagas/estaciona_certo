/* eslint-disable */
const jsonServer = require('json-server');

const path = require('path');

const rota = {
    ...require(path.join(__dirname, 'rotas/taloes.json'))
};

const server = jsonServer.create();
const router = jsonServer.router(rota);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 2000);
});

server.use(middlewares);
server.use(router);

server.listen(8090, () => {
    console.log('JSON Server is running');
});