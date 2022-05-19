const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;

//false para evitar que se reinicie 
// Syncing all the models at once.
conn.sync({ force:false }).then(() => {
  server.listen(PORT, () => console.log(`Listen on port ${PORT}`));
  });

