const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
//const figlet = require('figlet')


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  const readWrite = (file, contentType) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }
  switch (page) {
    case '/':
      readWrite('index.html','text/html')
      break;
    case '/otherpage':
      readWrite('otherpage.html','text/html')
      break;
    case '/otherotherpage':
      readWrite('otherotherpage.html','text/html')
      break;
    case '/api':
        
      let objToJson = {
        throwResult: randomThrow()
      }
      res.end(JSON.stringify(objToJson))
  
      function randomThrow(){
        let result = Math.random()
        switch(true){
          case (result<0.2):
            console.log("rock")
            return "rock"
            break
          case (result<0.4):
            console.log("paper")
            return "paper"
            break
          case (result<0.6):
            console.log("scissors")
            return "scissors"
            break
          case (result<0.8):
            console.log("lizard")
            return "lizard"
            break
          case (result<1):
            console.log("spock")
            return "spock"
            break
        }
      }
      randomThrow()

      break;
    case '/css/style.css':
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
      break;
    case '/js/main.js':
      readWrite('js/main.js','text/javascript')
      break;
  }
});

server.listen(8000);
