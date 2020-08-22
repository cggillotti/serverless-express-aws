
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const colors = require('./colors.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/media', express.static('media'));

function template(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);  
    });
    return result.join('');
  });
}

let key="BZEB-FTQV2S-FEAF";
let usage = "gift at /{?} attach values {/1} + {/2} = {?}".split("");

let bg = template`body {
  background: linear-gradient(${0}deg, ${1}, ${2}, ${3}, ${4});
  background-size: 800% 800%;

      -webkit-animation: AnimationName ${5}s ease infinite;
      -moz-animation: AnimationName ${6}s ease infinite;
      animation: AnimationName ${7}s ease infinite;
    }

    @-webkit-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
    
    a {
      color: inherit; 
      text-decoration: inherit; 
    }
    
    `;
  
  function fadestyle(res) {

    let rot = Math.floor(Math.random() * (100 - 20) + 20);
    let t1 = Math.floor(Math.random() * (8 - 2) + 2);
    let t2 = Math.floor(Math.random() * (8 - 2) + 2);
    let t3 = Math.floor(Math.random() * (8 - 2) + 2);
    
    let c1 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let c2 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let c3 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let c4 = colors.colors[Math.floor(Math.random() * colors.colors.length)];

    res.set('Content-Type', 'text/html');
    res.write("<html><head><style>" + bg(rot,c1,c2,c3,c4,t1,t2,t3) + "</style></head><body>");

  }

  function mfadestyle(res,c1,c2,c3,c4,t1,t2,t3) {

    let rot = Math.floor(Math.random() * (100 - 20) + 20);

    res.set('Content-Type', 'text/html');
    res.write("<html><head><style>" + bg(rot,c1,c2,c3,c4,t1,t2,t3) + "</style></head><body>");

  }

app.get('/1',(req,res) => {
  let h = Math.floor(Math.random() * (1000 - 70) + 70);
  const createSoundFloat = function (total)  {

    let topc = `<div id="bgc" style="
    font-size: 20rem;
    font color: inherit;
    font-family: monospace;
    position: fixed;
    top: 50%;
    left: 50%;
"></div>`

    const half = Math.ceil(total/2);
    let audio = `<div style="margin:50%"><audio id="a" controls>
                <source src="media/109-113.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
              </audio></div>
              <!-- 9 digits -->
              <!-- 64 | MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8MTMwLTE0MHwxMzAtMTQwfDEzMC0xNDB8  -->`;
    
    mfadestyle(res,"black","white","black","white",6,6,6);
    res.write(topc);
    do {

      res.write("<br>")

      if (total == half)
      {
        res.write(audio);
      }

      total-=1;
    }while (total)
  }

  createSoundFloat(h);
  let effect = `
    <script>
    function convert(place) {

      var time =  Math.floor(place);
      var min = "0"+Math.floor(time/60);
      var sec = (time - Math.floor(time/60)*60) >= 10 ? time - Math.floor(time/60)*60: "0" + (time - Math.floor(time/60)*60) ;
  
        return min+":"+sec;
      

    }
    
    var aud = document.getElementById('a');
    aud.addEventListener('timeupdate', function() {
    
      var topc  = document.getElementById('bgc');
      topc.innerText = convert(aud.currentTime);
      
  
   });
  
    </script>
  `;
  res.write(effect+"</body></html>");
  res.end();
}); 

app.get('/626833368melwaters',(req,res) => {

  let size = Math.floor(Math.random() * (1000 - 100) + 200) / 100;
  //8.88
  const createSoundFloat = function (total)  {

    const half = Math.ceil(total/2);
    let prize = ``;
    let size = Math.floor(Math.random() * (1000 - 100) + 200) / 100;
    let c1 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
  
    
    fadestyle(res);
    res.write("<span style=\"color:"+c1+"; font-family:monospace; font-size:25rem\"><a href=\"http://amazon.com\">"+"Happy Birthday!"+"</a></span>")
    do {
       size = Math.floor(Math.random() * (1000 - 100) + 200) / 100;
       c1 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
      res.write("<span style=\"color:"+c1+"; font-size:"+size +"rem\"><a href=\"http://amazon.com\">"+key+"</a></span>")
      total-=1;
    }while (total)
  }

  createSoundFloat(100);
  res.write("</body></html>");
  res.end();
}); 



app.get('/2',(req,res) => {
  let h = Math.floor(Math.random() * (1200 - 70) + 70);
  const createImageFloat = function (total)  {

    let text = "Who's hole was it?            Ellensburg".split("");
    
    fadestyle(res);

    do {

      if (text.length && total % 13 ==0 )
      {
        let s = Math.random() * (30 - 2.8) + 2.8;
        let p = Math.random() * (100 - 1) + 1;
        res.write("<span style=\"color :" + colors.colors[Math.floor(Math.random() * colors.colors.length)] + "; margin-left : "+p.toFixed(0)+"% ; font-size : "+s.toFixed(2)+"rem; \"><b>");
        res.write(text.shift());
        res.write("</b></span>");
      }

      res.write("<br>");

      total-=1;
    } while (total)

  }

  createImageFloat(600);
  res.write("</body></html>");
  res.end();
});




app.get('/',(req,res) => {
  console.log("Activated / endpoint");
  const countDown = function (total)  {
    const array = ['K','N','3','J','O','X'];
    let ret = "";
    let rot = Math.floor(Math.random() * (80 - 20) + 20);
    let c1 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let c2 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let c3 = colors.colors[Math.floor(Math.random() * colors.colors.length)];
    let instruction = `<!-- nmission  remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission remove  ab 1st license for tranmission -->`;
    res.set('Content-Type', 'text/html');
    res.write("<html>"+instruction+"<body style=\"background: linear-gradient(" + rot + "deg, " + c2 + "  0%," + c1 + " 51% , " + c3 + " 85%);\">");
    do {

      res.write("<span class=\"secret1\" style=\"color :" + colors.colors[Math.floor(Math.random() * colors.colors.length)] + " \">")
      res.write(array[Math.floor(Math.random() * array.length)]);
      res.write("</span>")
      if (usage.length && Math.ceil(Math.random() * 10000)%36 == 0)
      {
        res.write("<span style=\"color :" + colors.colors[Math.floor(Math.random() * colors.colors.length)] + "; font-size : 1.4rem; \"><b>")
        res.write(usage.shift());
        res.write("</b></span>")
      }

      
      if (Math.ceil(Math.random() * 10000)%128 ==0)
      {
        res.write("</br>");
      }

      total-=1;
    }while (total)

  }

  let output = countDown(10000);
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
app.listen(3001, () => console.log(`Listening on: 3001`));
console.log("Activated");
}else {
module.exports.handler = serverless(app);
}

