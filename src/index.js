const express = require('express');
const apiRoutes = require('./routes');
const { ServerConfig } = require('./config');
const {City} = require('./models')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
})