var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('dinamic');
});

// la sintaxis :blabla es un parametro que se puede recoger con req.param.blabla
router.get("/:dataURL/:dataId", function(req, res) {
    res.render('dinamic', {
        dinamicData:{
            title:req.params.dataURL,
            id:req.params.dataId
        }
    });
    //res.send('Dinamic info: ' + req.params.dataURL);
})


module.exports = router;