const http = require('http');
const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const web = new Command();
web.requiredOption('-h, --host <type>', 'Адреса сервера')
web.requiredOption('-p, --port <number>', 'Порт сервера')
web.requiredOption('-c, --cache <path>', 'Шлях до кешу');

web.parse(process.argv);

const options = web.opts();
const { host, port, cache } = options;

const server = http.createServer();

server.listen(port, host, () => {
  console.log(`Server adress is http://${host}:${port}`);
});
