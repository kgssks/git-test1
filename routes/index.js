var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/g', function(req,res,next){
  res.send("hello!!");
  console.log("call G")
})

module.exports = router;
