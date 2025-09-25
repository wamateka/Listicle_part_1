import express from 'express'
import dotenv from 'dotenv'
import startUpRoutes from './routes/startUpRoutes.js'
dotenv.config()
const app =express()
const PORT = process.env.PORT || 3001
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/startUpList',startUpRoutes)
app.listen(PORT, ()=>{
     console.log(`🚀 Server listening on http://localhost:${PORT}`);
})