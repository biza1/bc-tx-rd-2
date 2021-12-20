const config = require("./config.json");
const fetch = require('node-fetch');
const express = require("express");
const server = express();
var multer = require('multer');
var upload = multer();
const nocache = require('nocache');
server.use(express.json()); 
server.use(express.urlencoded({ extended: true })); 
server.use(upload.array()); 
server.use(express.static('public'));
server.use(nocache());
server.set('etag', false);
server.use(function(req, res, next)
{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Max-Age', '2592000');
  res.set('Cache-Control', 'no-store');
  next();
});
server.disable('view cache');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

server.all('/', async (req, res) => {
  res.send("Hello World !");
});

/*
server.all('/', async (req, res) => {
  try
  {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    ip = ip.split(',')[0];
    ip = ip.split(':').slice(-1);
    fetch(`http://ip-api.com/json/${ip}`)
      .then(results => results.json())
        .then(data => {res.send(data); return;})
        .catch(err => {res.send("Hello World !"); return;})
      .catch(err => {res.send("Hello World !"); return;});
  } catch(err){res.send("Hello World !");}
});
*/

function keepAlive() {
  setInterval(function(){
    try
    {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', "https://eight-material-cilantro.glitch.me", true);
      xhr.send(null);
    } catch {}
  }, 120000);
  server.listen(3000, () => {
    console.log("Server is ready.");
  });
}

module.exports = keepAlive;
