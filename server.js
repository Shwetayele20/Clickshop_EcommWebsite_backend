const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/auth/auth.route');
const roleRoutes = require('./routes/productRouter')
const allAddress = require('./routes/addressRoute')
// const allOrder = require('../backend/routes/orderRoute')

const cors = require('cors');

app.use(cors({
  origin: 'https://e-commerce-9v7w.vercel.app/',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth' , authRoutes);
app.use('/api/product' , roleRoutes);
app.use('/api/address' , allAddress);
// app.use('/api/order' , allOrder);

app.get('/',(req , res) =>{
    res.send('API Is Running....');

})
const PORT = process.env.PORT || 5000;


async function dbConnection() {
  try {
    await db.authenticate();  // test DB connection
    await db.sync({ force: false });          // create tables if not exist (based on models)
    app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}
dbConnection();
