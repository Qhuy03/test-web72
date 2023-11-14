const express = require("express");
const { connectToDb, db } = require("./db");
const inventoriesRouter = require('./routes/inventories')
const userRouter = require('./routes/user')
const orderRouter = require('./routes/orders')

const app = express();
app.use('/inventories', inventoriesRouter)
app.use('/user', userRouter)
app.use('/order', orderRouter)

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
