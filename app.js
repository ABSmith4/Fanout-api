if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const router = express.Router();
router.get('/', (req,res) => {
  res.send("Hello");
});

router.get('/sendFanout', (req,res) => {
  res.send('SendingFanout');
});

app.use('/',router);

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
