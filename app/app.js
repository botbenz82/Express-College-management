const express = require('express');
const morgan = require('morgan');
const globalErrorHandler = require('../middlewares/globalErrorHandler');
const notFoundErrorHandler = require('../middlewares/notFoundHandler');
const app = express();
const adminRouter = require('../routes/staff/adminRouter');

// === Middlewares ===
app.use(morgan('dev'));
app.use(express.json());

// === Routes ===
app.use('/api/admins', adminRouter)

// === Error Middlewares ===
app.use(notFoundErrorHandler)
app.use(globalErrorHandler)


module.exports = app;