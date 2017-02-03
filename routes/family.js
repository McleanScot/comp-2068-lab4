let express = require('express');
let router = express.Router();

//get books main page
router.get('/', function(req, res, next){
  res.render('family/index');
});

module.exports = router;
