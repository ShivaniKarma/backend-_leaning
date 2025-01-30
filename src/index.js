
import 'dotenv/config'
import connectDB from "./db/db.js";
import { app } from './app.js';
//console.log(process.env) 


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8001, ()=>{
        console.log(`Server is running at port:: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed ::", err)
} )