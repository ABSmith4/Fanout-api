if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const router = express.Router();
const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCNT_SID, process.env.TWILIO_AUTH_TOKEN);


app.use(express.json());
app.use(express.urlencoded( { extended: true }));

router.post('/sendFanout', (req,res) => {
  let recipient = req.body.recipient
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

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
