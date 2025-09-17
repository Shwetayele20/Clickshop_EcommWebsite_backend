const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/auth/auth.route');
const userRoutes = require('./routes/auth/users.route');


const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//middlewares
app.use(express.json());
app.use('/api/auth' , authRoutes);
app.use('/api/user' , userRoutes)

app.get('/',(req , res) =>{
    res.send('API Is Running....');

})
const PORT = process.env.PORT;


async function dbConnection() {
  try {
    await db.authenticate();  // test DB connection
    await db.sync({ alter: true });          // create tables if not exist (based on models)
    app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}
dbConnection();
