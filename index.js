// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const server = require('./server.js');

const PORT = '9090';

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
})