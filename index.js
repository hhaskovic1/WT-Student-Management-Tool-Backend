const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors');
const e = require('express');



app.use(cors())

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var obj = { 
    brojVjezbi : 0, 
    brojZadataka : null
};

/*
app.get('/', function(req, res){
    
    fs.readFile("vjezbe.csv", function(err, data){
        
        if (err){
            res.send("Greska")
        }
        else {

        
            var obj = new Object()

           // let brojVjezbi;
       //{brojVjezbi:integer,brojZadataka:[z0,z1,...,zbrojVjezbi-1]}     
            broj = []
            let tekst = data.toString()
            let redovi = tekst.split(',')
            //brojZadataka.push({naziv: redovi[0]})
            obj.brojVjezbi = tekst[0]
           for(let i=1; i<redovi.length; i++){
                //if(redovi[i]!="")brojZadataka.push({brojZadataka: redovi[i]})
                if(redovi[i]!="")broj.push(redovi[i])
            }
            obj.brojZadataka = broj;
            res.send(obj)
        }
    })
})*/

app.get('/', function(req, res){
    
    fs.readFile("vjezbe.csv", function(err, data){
        
        if (err){
            res.send("Greska")
        }
        else {

        
            var obj = new Object()

           // let brojVjezbi;
       //{brojVjezbi:integer,brojZadataka:[z0,z1,...,zbrojVjezbi-1]}     
            broj = []
            let tekst = data.toString()
            let redovi = tekst.split(',')
            //brojZadataka.push({naziv: redovi[0]})
            obj.brojVjezbi = redovi.length-1;
           for(let i=1; i<redovi.length; i++){
                //if(redovi[i]!="")brojZadataka.push({brojZadataka: redovi[i]})
                if(redovi[i]!="")broj.push(redovi[i])
            }
            obj.brojZadataka = broj;
            res.send(obj)
        }
    })
})

app.get('/vjezbe', function(req, res){

   // console.log('dddd');

    fs.readFile("vjezbe.csv", function(err, data){
        
        if (err){
            res.send("Greska")
        }
        else {

            //req.body.data="sdsd";
        
            var obj = new Object()

           // let brojVjezbi;
       //{brojVjezbi:integer,brojZadataka:[z0,z1,...,zbrojVjezbi-1]}     
            broj = []
            let tekst = data.toString()
            
            let redovi = tekst.split(',')
            obj.brojVjezbi = redovi.length-1;
            //brojZadataka.push({naziv: redovi[0]})
            //obj.brojVjezbi = tekst[0]
           for(let i=1; i<redovi.length; i++){
                //if(redovi[i]!="")brojZadataka.push({brojZadataka: redovi[i]})
                if(redovi[i]!="")broj.push(redovi[i])
            }
            obj.brojZadataka = broj;
            res.send(obj)
        }
    })
})


app.get('/unosVjezbi', (req, res) => {

    
  //  res.sendFile(__dirname + '/unosVjezbi.html');
   
    /*if(req.body=="{}") res.sendFile(__dirname + '/unosVjezbi.html');

    else res.send(req.body);*/
    if(req.url=='/unosVjezbi' || req.url=='/unosVjezbi?ime='){
       // req.body="aaa";
        res.sendFile(__dirname + '/unosVjezbi.html');
        console.log(req.url);
    }
        
        
    else {
      //  req.body="bbb";
      //  unos.f1();
      //unos.f1();
     // document.getElementById("form2").innerHTML="Dodaj";

      //  res.send(document.getElementById("form2"));
      res.send(req.body)
    }
   // res.send(req.body)


    //unos.fun();
    /*document = '/unosVjezbi.html';
    
    if(document.getElementById("prvi").innerHTML="Dodaj"){
        
    }
    else if(document.getElementById("btn").innerHTML="Unesi" ) {

    }
    else res.sendFile(__dirname + '/unosVjezbi.html');
*/
    

   // res.sendFile(unos(__dirname + '/unosVjezbi.html'));
   // unos('/unosVjezbi.html');
});

app.post('/',function(req,res){

    res.send({
        message: "Uspješno dodana aktivnost POST/!"
    })

});

app.post('/vjezbe',function(req,res){

    /*res.send({
        message: req.body
    })*/
    console.log('aaaa');

    
    fs.readFile("vjezbe.csv", function(err, data){

        if (err){
            res.send("Greska")
        }
        else {

            //let tekst = data.toString()
            //let redovi = tekst.split(',')
            let tekst = "";
            tekst+=req.body.brojVjezbi+",";
            for(i=0; i<req.body.brojZadataka.length;i++){
                tekst+=req.body.brojZadataka[i];
                if(i!=req.body.brojZadataka.length-1)tekst+=",";
            }
        
            fs.writeFile("vjezbe.csv", tekst, function(err){})

            res.send(req.body)

        }
        

        
    })

   /* res.send({
        message: "Uspješno dodana aktivnost POST/vjezbe!"
    })*/

});






app.listen(8085);