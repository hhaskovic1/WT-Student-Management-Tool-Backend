const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors');
const e = require('express');
const path = require("path");


const db = require('./db.js');
//db.sequelize.sync();
db.sequelize.sync({force:true});

//var exp = module.exports = express();

app.use(cors())

app.use(express.static("public"));
app.use(express.static("models"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

//app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use('/', express.static(path.join(__dirname,'public/js')));
app.use('/', express.static(path.join(__dirname,'public/html')));

app.use('/', express.static(path.join(__dirname,'models')));



var obj = { 
    brojVjezbi : 0, 
    brojZadataka : null
};



//dodati /vjezbe da je get i post
app.get('/vjezbe/', function(req, res){

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

             var greska = { 
                status: null,
                data : "Pogresan parametar "
            };

            if(obj.brojVjezbi<1||obj.brojVjezbi>15) {

                greska.status = "error";
                greska.data+="brojVjezbi";
            }

            for(var i=0; i<broj.length; i++) {

                if(broj[i]<0 || broj[i]>10) {
                    if(greska.status==null){
                        greska.data+="z"+(i);
                        greska.status = "error";
                    }
                    else {
                        greska.data+=",z"+(i);
                    }

                }

            }

            if(obj.brojZadataka.length!=obj.brojVjezbi){
                if(greska.status==null){
                    greska.data+="brojZadataka";
                    greska.status = "error";
                }
                else {
                    greska.data+="brojZadataka";
                }
            }

            
            if(greska.status == "error")res.send(greska);
            else res.send(obj)
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

             var greska = { 
                status: null,
                data : "Pogresan parametar "
            };

            if(obj.brojVjezbi<1||obj.brojVjezbi>15) {

                greska.status = "error";
                greska.data+="brojVjezbi";
            }

            for(var i=0; i<broj.length; i++) {

                if(broj[i]<0 || broj[i]>10) {
                    if(greska.status==null){
                        greska.data+="z"+(i);
                        greska.status = "error";
                    }
                    else {
                        greska.data+=",z"+(i);
                    }

                }

            }

            if(obj.brojZadataka.length!=obj.brojVjezbi){
                if(greska.status==null){
                    greska.data+="brojZadataka";
                    greska.status = "error";
                }
                else {
                    greska.data+="brojZadataka";
                }
            }

            
            if(greska.status == "error")res.send(greska);
            else res.send(obj)
         }
     })
 })

 


app.get('/unosVjezbi.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/unosVjezbi.html');
    
  
  
});

app.get('/vjezbe.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/vjezbe.html');

});



app.post('/vjezbe',function(req,res){

    
    
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



app.get('/student', function(req,res){
    db.student.findAll().then(function(p){
        

        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})

app.get('/grupa', function(req,res){
    db.grupa.findAll().then(function(p){
        

        res.json(p)
    }).catch(function(err){
        res.send("Greska")
    })
})


//{status:”Kreiran student!”}
                    //                  node index.js

//{ime:string,prezime:string,index:string,grupa:string}
app.post('/student', function(req, res){
    console.log(req.body);


    db.student.findOne({where: {indeks: req.body.indeks}}).then(function(p){//console.log(p)
        if(p!=null){
            //res.send("Ima");
            res.send({status:"Student sa indexom {"+req.body.indeks+"} već postoji!"})
        }
        else {
            db.student.create({
                ime: req.body.ime, 
                prezime: req.body.prezime, 
                indeks: req.body.indeks,
                grupa: req.body.grupa
            }).then(function(p){
        
               /* JSON.stringify(
                    { 
                        status: "Kreiran student!"
                    }
                 )*/
        
               // res.send(p)
               res.send({status:"Kreiran student!"})
             
           //  res.send({status: "Kreiran student!"});
        
            }).catch(function(err){
                console.log(err)
                res.send("Greska")
            })
        }
    }).catch(function(err){
        console.log(err)
        res.send("Greska");
    })

    
})

app.get('/unosStudenata.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/unosStudenata.html');
    
  
  
});

/*

app.post('/v2/aktivnost', function(req, res){
    console.log(req.body)
    db.aktivnost.create({
        naziv: req.body.naziv,
        pocetak: req.body.pocetak,
        kraj: req.body.kraj,
        grupa: req.body.grupa,
        dan: req.body.dan,
        tip: req.body.tip,
        predmet: req.body.predmet
    }).then(function(p){
        res.send(p)
    }).catch(function(err){
        console.log(err)
        res.send("Greska")
    })
})



                    node index.js



*/



app.listen(3000);