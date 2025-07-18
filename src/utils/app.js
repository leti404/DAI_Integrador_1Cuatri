const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);

module.exports = app;
