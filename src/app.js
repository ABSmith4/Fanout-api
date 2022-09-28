if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const pool = require('./v1/database/config/config')
const bodyparser = require("body-parser");
const fs = require('fs');


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCNT_SID, process.env.TWILIO_AUTH_TOKEN);
const cors = require('cors')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));



app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors())



router.post('/sendFanout', (req, res) => {
  let recipient = req.body.recipient;
  client.messages
  .create({
    body: 'Fanout Alert! Someone you know has been in a car accident!',
    to: recipient,
    from: process.env.TWILIO_SENDER_NUM,
  })
  .then((message) => console.log(message.sid));
  res.send('SendingFanout');
});

app.use('/',router);


//updated route handler??
const routes = fs.readdirSync('./src/v1/routes').filter(file => file.endsWith('.js'));

const v1routes = (async () => {
  for (const route of routes) {
    require(`./v1/routes/${route}`)
  }
})


//const v1userRouter = require("./v1/routes/userRoutes");

app.use("/api/v1", v1routes);



app.listen(PORT, () => {
    console.log(`Web Server is listening at port ${PORT}`);
});

