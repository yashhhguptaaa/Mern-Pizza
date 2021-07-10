const express = require("express");
const db= require('./db');
const Pizza = require('./models/pizzaModel')
const pizzaRoutes = require('./routes/pizzasRoute');
const userRoutes = require('./routes/userRoute')

const app = express();
app.use(express.json());

app.use('/api/pizzas',pizzaRoutes);
app.use('/api/users',userRoutes);

app.get('/',(req,res)=> {
    res.send("Server Working 🔥");
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{ console.log(`Server running on port 🔥 : ${port}`)});