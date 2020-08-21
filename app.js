
const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res) => {
  const countDown = function (total)  {
    const array = ['K','N','3','J','O','X'];
    let ret = "";

    do {
      res.write(array[Math.floor(Math.random() * array.length)]);
      total-=1;
    }while (total)

  }
  let output = countDown(1000000);
  res.end();
});

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

if(process.argv != null   && process.argv[2] != "-s" ){
app.listen(3000, () => console.log(`Listening on: 3000`));
}else {
module.exports.handler = serverless(app);
}

