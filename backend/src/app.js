const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./Routes/Auth.routes');
const dashboardRoutes = require('./Routes/dashboard.routes');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use('/api/auth/user',authRoutes);
app.use('/api/user',dashboardRoutes);


module.exports = app;
