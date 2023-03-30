import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios'

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post("/verify-token", async (req, res) => {
  try {
    const { token } = req.body;
    // replace APP_SECRET_KEY with your reCAPTCHA secret key
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${'APP_SECRET_KEY'}&response=${token}`);
    return res.status(200).json({
      success: true,
      message: "Token successfully verified",
      data: response.data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error verifying token"
    });
  }
});

http.createServer(app).listen(PORT, () => console.log(`App started on port ${PORT}`));