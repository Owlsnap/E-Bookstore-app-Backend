const express = require('express')
const app = express()
const cors = require('cors');

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require('dotenv').config()

//middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://e-bookstore-app.vercel.app', 'https://e-bookstore-app-backend.vercel.app'],
    credentials: true
}));

//routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');
const adminRoutes = require('./src/stats/admin.stats');

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);



//pass Uirfg69wCwcmvMGa username alexblom8

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (require, response) => {
        response.send('Bookstore server is running')
    })
    
}

main().then(() => console.log("Mongodb connected")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })