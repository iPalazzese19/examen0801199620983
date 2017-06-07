var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen 1er Parcial' });
});

router.get('/0801199620983', function(req,res,next){
  var contacto = [
                  {"nombre": "Italo Palazzese"},
                  {"cuenta": 0801199620983},
                  {"correo": "italopalazzese96@gmail.com"}
                ];
  res.json(contacto);
});

router.get('/sumar', function(req,res,next){
  res.render('suma',{"txtNum1":"", "txtNum2":"", "msg":""});
});

var numeros = [];

router.post('/sumar',function(req,res,next){
  console.log(req.body);
    numeros.push(req.body.txtNum1);
    numeros.push(req.body.txtNum2);
    var msgs = parseInt(numeros[0]) + parseInt(numeros[1]);
    var rtObject = {};
    rtObject.txtNum1 = req.body.txtNum1;
    rtObject.txtNum2 = req.body.txtNum2;
    rtObject.msg= msgs;
  res.render('suma', rtObject);
});

module.exports = router;
