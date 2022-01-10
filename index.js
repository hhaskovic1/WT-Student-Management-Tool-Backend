const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors');
const e = require('express');
const path = require("path")

//var exp = module.exports = express();

app.use(cors())

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

//app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use('/', express.static(path.join(__dirname,'public/js')));
app.use('/', express.static(path.join(__dirname,'public/html')));


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
            obj.brojVjezbi = redovi.length-1;
           for(let i=1; i<redovi.length; i++){
                //if(redovi[i]!="")brojZadataka.push({brojZadataka: redovi[i]})
                if(redovi[i]!="")broj.push(redovi[i])
            }
            obj.brojZadataka = broj;
            res.send(obj)
        }
    })
})*/

//dodati /vjezbe da je get i post

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

    res.sendFile(__dirname + '/public/html/unosVjezbi.html');
    
   /* const user = require('./unosVjezbi');
    console.log(`User: ${user.getName()}`);*/
 

    /*const { getName, dob } = require('./unosVjezbi');
    console.log(
      `${getName()} was born on ${dob}.`
    );*/
    
    /*const { getName} = require('./unosVjezbi');
    console.log(
      `${getName()}`
    );*/

   

//res.sendFile(__dirname + '/unosVjezbi.html');

   /* const {getName} = require('./unosVjezbi');
    getName();*/
    


    /*if(req.url=='/unosVjezbi' || req.url=='/unosVjezbi?ime='){
      
        res.sendFile(__dirname + '/unosVjezbi.html');
        console.log(req.url);
    }
        
        
    else { 
        var br="";
        br+=req.originalUrl[16];
        if(req.originalUrl.length==18)br+=req.originalUrl[17];

    

      console.log(br);
      
      res.send(req.originalUrl)
    }*/
  
});

app.get('/vjezbe.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/vjezbe.html');

});

/*
app.get('/unosVjezbi', function(req, res){
    fs.readFile("vjezbe.csv", function(err, content){
        if(err) throw err;
        res.type('html');       
 
        res.writeHeader(200, {});
      
                   
        res.write("<table><tr>" + "<td>Ime</td>" +
                   "<td>Prezime</td>" + "<td>Adresa</td>" +
                   "<td>Broj telefona</td></tr>");
        
        var bla = content.toString();
        var redovi = bla.split("\n");
 
        for(var i = 0; i < redovi.length; i++){
            var kolone = redovi[i].split(",");
 
            res.write("<form action='http://localhost:8085/" + kolone[0] + "'method='GET'><tr><td>" + kolone[0] +  "</td>" +
                      "<td>" + kolone[1] +  "</td>" +
                      "<td>" + kolone[2] +  "</td>" +
                      "<td>" + kolone[3] +  "</td>" +
                      "<td>" + "<input type=\"submit\" value=\"Delete\">"  + "</td>" +
                      "<td>" + "<input type=\"submit\" value=\"Edit\" formaction='http://localhost:8085/edit/" +
                      kolone[0] + "/" + kolone[0] + "/" + kolone[0] + "/" + kolone[0] + "'></td></tr></form>");
        }
        res.write("</table>");
 
        res.end();
    });
});*/
/*
app.post('/',function(req,res){

    res.send({
        message: "Uspješno dodana aktivnost POST/!"
    })

});*/

app.post('/vjezbe',function(req,res){

    /*res.send({
        message: req.body
    })*/
  //  console.log('aaaa');

    
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