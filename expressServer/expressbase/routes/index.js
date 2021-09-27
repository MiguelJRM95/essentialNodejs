var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./public/books.json', (error, data)=>{
    if(error){
      res.write('error')
    }else{
      res.render('index', { data: JSON.parse(data)});
    }
  })
  
});

module.exports = router;
