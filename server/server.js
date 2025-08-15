import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './src/routes/user.route.js'

const app = express()

app.use(cors(
    {
        origin : process.env.corsOrigin,
        Credential : true
    }
))
app.use(express.json())
app.get('/', (req,res)=> res.send('server is Live! '))
app.use('/api/auth', router)

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log("server is running on port : ", port)
})