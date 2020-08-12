const http = require('http');
const fs= require('fs');
const path = require('path');


http.createServer((req,res) => {

  const file = req.url === '/' ? 'index.html': req.url;
  const filePath = path.join(__dirname, 'public', file);
  const extname = path.extname(filePath);

  console.log(
    extname
  );


  const allowedFileTypes = ['.html','.css','.js'];
  const allowed = allowedFileTypes.find(item => item == extname);

  if(allowed){
    fs.readFile(
      filePath,
      (err, content) => {
        if(err) throw err;

        res.end(content);
      }
    );
  }else{
    return;
  };


}).listen(5000, () => console.log('Server is running'));