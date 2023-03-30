import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()

const port = 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.post("verify-token", async (req, res) => {
    try {
        let token = req.body
        let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_API_RECAPTCHA_BACKEND}&response=${token}`)
        return res.status(200).json({
            success: true, 
            message: "Token successfully verified",
            data: response.data
    })}

    catch(error){
        return res.status(500).json({
            success:false,
            message: "Error verifying token"
        })
    }
})

app.listen(port , () => console.log(`App started on port ${port}`))


