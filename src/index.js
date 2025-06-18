const express = require('express');
const apiRoutes = require('./routes');
const { ServerConfig } = require('./config');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
})