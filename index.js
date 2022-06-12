const express = require('express');
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin');

const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


// Init
const PORT = process.env.PORT || 3000;
const app = express();
const DB = "mongodb+srv://radhasjt:Cadenza97256@cluster0.mqrtu.mongodb.net/amazonclone_db?retryWrites=true&w=majority"

// Middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connection database
mongoose.connect(DB).then(() => {
	console.log('Connection Successful');
}).catch((e) => {
	console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Connected at port ${PORT}`);
});