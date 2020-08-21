
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const colors = require('./colors.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/',(req,res) => {
  const countDown = function (total)  {
    const array = ['K','N','3','J','O','X'];
    let ret = "";
    let rot = Math.floor(Math.random() * (80 - 20) + 20);
    let c1 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let c2 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let c3 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    res.set('Content-Type', 'text/html');
    res.write("<html><body style=\"background: linear-gradient(" + rot + "deg, " + c2 + "  0%," + c1 + " 51% , " + c3 + " 85%);\">");
    do {

      res.write("<span style=\"color :" + colors.colors[Math.floor(Math.random() * colors.colors.length)] + " \">")
      res.write(array[Math.floor(Math.random() * array.length)]);
      res.write("</span>")
      if (Math.ceil(Math.random() * 10000)%12 ==0)
      {
        res.write("</br>");
      }

      total-=1;
    }while (total)

  }

  let output = countDown(100000);
  res.write("</body></html>");
  res.end();
});

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

if(process.argv != null   && process.argv[2] == "-l" ){
app.listen(3000, () => console.log(`Listening on: 3000`));
}else {
module.exports.handler = serverless(app);
}

