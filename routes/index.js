var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // What did we request?
    let pathname = req.url;
  
    // If blank let's ask for index.html
    if (pathname == '/') {
      pathname = '/snake/index.html';
    }

    // Map extension to file type
    const typeExt = {
      '.html': 'text/html',
      '.js':   'text/javascript',
      '.css':  'text/css'
    };
    
    let contentType = 'text/plain';

    // Ok what's our file extension
    if(path != undefined) {
      let ext = path.extname(pathname);
      contentType = typeExt[ext] || 'text/plain';
    }
  
    // Now read and write back the file with the appropriate content type
    fs.readFile(__dirname + pathname,
      function (err, data) {
        if (err) {
          res.writeHead(500);
          return res.end('Error loading ' + pathname);
        }
        // Dynamically setting content type
        res.writeHead(200,{ 'Content-Type': contentType });
        res.end(data);
      }
    );
});

module.exports = router;
