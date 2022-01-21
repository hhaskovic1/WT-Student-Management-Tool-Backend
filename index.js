const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors');
const e = require('express');
const path = require("path");


const db = require('./db.js');
const { student, grupa } = require('./db.js');

db.sequelize.sync({force:true});
/*db.sequelize.sync({force:true}).then(function(){
    inicializacija().then(function(){
        console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
        process.exit();
    });
});*/

var studentiListaPromisea=[];
var grupeListaPromisea=[];

app.use(cors())

app.use(express.static("public"));
app.use(express.static("models"));

app.use(bodyParser.json());

app.use(bodyParser.text());

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
/*app.get('/vjezbe/', function(req, res){

 
   
 
     fs.readFile("vjezbe.csv", function(err, data){
         
         if (err){
             res.send("Greska")
         }
         else {
 
         
             var obj = new Object()
 
             broj = []
             let tekst = data.toString()
             
             let redovi = tekst.split(',')
             obj.brojVjezbi = redovi.length-1;
          
            for(let i=1; i<redovi.length; i++){
              
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
 
*/
 app.get('/vjezbe', function(req, res){
    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    var el = { 
        in : 0, 
        vr : 0
    };
    
    var niz = [];
     

    var obj = { 
        brojVjezbi : 0, 
        brojZadataka : null
    };
    

     obj = new Object()

    let brojac = 0;
    var broj = [];
    var s="";


    let brojac2 = 0;
    
    // console.log(db.vjezba.countZadaci());
    db.vjezba.findAll().then(function(resSet){
        //  console.log("Lista: ");
     resSet.forEach(knjiga => {
         brojac++;
         
      
    
    })

})



    db.vjezba.findAll().then(function(resSet){
        //  console.log("Lista: ");
     
       
  
    resSet.forEach(knjiga => {
        brojac2++;
        knjiga.countZadaci().then(function(d){
           // console.log(d);
           
              
            //   console.log(knjiga.id+" "+d);
            el = new Object();
            el.in=knjiga.id;
            el.vr=d;

            niz.push(el);
       //     console.log(broj[0]);
      // console.log(d.value);
   //   console.log(broj);
   //console.log(niz);
   
   if(brojac2==brojac && niz.length==brojac){
    
    niz= niz.sort(dynamicSort("in"));

    for(var l=0; l<niz.length; l++) {
        broj.push(niz[l].vr)
    }

    
    obj.brojVjezbi=brojac;
    obj.brojZadataka=broj;
    console.log(obj);
    res.send(obj)

   }
           }); 
        
          // console.log(broj[0]);
        /*db.zadatak.findAll().then(function(r){
            brojac=0;
       r.forEach(k => {
           if(knjiga.hasZadaci(k)){
               brojac++;
       
           }


          
      }) 
  
    });*/
     
   
   })
   // console.log(s);
    //console.log(broj[0]);
   //console.log(brojac);
    //obj.brojVjezbi=brojac;
   // obj.brojZadataka=broj;
 
 });
 
 
               
    


   // res.send(obj)
 
    /* fs.readFile("vjezbe.csv", function(err, data){
         
         if (err){
             res.send("Greska")
         }
         else {
 
             var obj = new Object()
 
               
             broj = []
             let tekst = data.toString()
             
             let redovi = tekst.split(',')
             obj.brojVjezbi = redovi.length-1;
             
            
            for(let i=1; i<redovi.length; i++){
             
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
     })*/




 })

 


app.get('/unosVjezbi.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/unosVjezbi.html');
    
  
  
});

app.get('/vjezbe.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/vjezbe.html');

});



app.post('/vjezbe',function(req,res){

    /*for(i=0; i<req.body.brojZadataka.length;i++){
        tekst+=req.body.brojZadataka[i];
        if(i!=req.body.brojZadataka.length-1)tekst+=",";
    }*/

    /*db.zadatak.drop();
    db.vjezba.drop();*/
    

    //db.zadatak.destroy({ truncate : true, cascade: true }) .then(() => {

    /*
    db.student.findOne({where:{index: req.params.index}}).then(function(andric){
            andric.getGrupe().then(function(resSet){
              //  console.log("Lista: ");
                resSet.forEach(knjiga => {
                    //console.log("\t"+knjiga.naziv);
                    if(knjiga.naziv!=req.body.grupa){
                        knjiga.removeStudenti([stud]);
                    }
                });
            });
        });
         */
     let brojac = 0;
    
   // console.log(db.vjezba.countZadaci());

   db.vjezba.findAll().then(function(resSet){
       //  console.log("Lista: ");
    resSet.forEach(knjiga => {
        brojac++;
        knjiga.countZadaci().then(function(d){
           // console.log(d+" "+knjiga.id);
           }); 
        
    
        /*db.zadatak.findAll().then(function(r){
            brojac=0;
       r.forEach(k => {
           if(knjiga.hasZadaci(k)){
               brojac++;
       
           }


          
      }) 
  
    });*/
     
   
   })
   
  // console.log(brojac);

});


   //db.zadatak.drop()

   /*db.vjezba.removeConstraint(  
    "vjezbas",
    "vjezbaId",
    { logging: console.log },
  )*/
   
  // queryInterface.removeConstraint(db.vjezba,"zadatakId");

 /*

  db.sequelize.queryInterface.removeConstraint(  
    "zadataks",
    "PRIMARY",
    { logging: console.log },
  ).then(() => {
    return new Promise(function(resolve,reject){resolve(this);});
}).catch(function(err){
    //res.send(err)
})

   db.sequelize.queryInterface.removeConstraint(  
    "zadatak_vjezba",
    "PRIMARY",
    { logging: console.log },
  ).then(() => {
    return new Promise(function(resolve,reject){resolve(this);});
}).catch(function(err){
   // res.send(err)
})


db.sequelize.queryInterface.removeConstraint(  
    "zadatak_vjezba",
    "PRIMARY",
    { logging: console.log },
  ).then(() => {
    return new Promise(function(resolve,reject){resolve(this);});
}).catch(function(err){
   // res.send(err)
})*/

/*
db.sequelize.queryInterface.removeConstraint(  
    "vjezbas",
    "PRIMARY",
    { logging: console.log },
  ).then(() => {
    return new Promise(function(resolve,reject){resolve(this);});
}).catch(function(err){
   // res.send(err)
})

db.vjezba.drop().then(() => {
    
}, (err) => {
  console.log('truncate: ', err);
 
});
*/

/*
db.sequelize.queryInterface.removeConstraint(  
    "vjezbas",
    "SECONDARY",
    { logging: console.log },
  ).then(() => {
    return new Promise(function(resolve,reject){resolve(this);});
}).catch(function(err){
    res.send(err)
})*/
   /*db.vjezba.drop().then(() => {
    
    }, (err) => {
      console.log('truncate: ', err);
     
    });*/

  /*  db.zadatak.destroy({ truncate: { cascade: true } })
    .then(() => {
    //  res.json({ status: true });
    }, (err) => {
      console.log('truncate: ', err);
      //res.json(err);
    });*/


      /*db.vjezba.destroy({ truncate: { cascade: true } })
    .then(() => {
    //  res.json({ status: true });
    }, (err) => {
      console.log('truncate: ', err);
      //res.json(err);
    });*/

    for(let i=0; i<req.body.brojVjezbi;i++){
        

        db.vjezba.create({brojZadataka:req.body.brojZadataka[i]}).then(function(k){
         //   console.log(req.body.brojZadataka[i]);
            for(let j=0; j<req.body.brojZadataka[i];j++){

              //  console.log(k);


                db.zadatak.create().then(function(p){

                    k.addZadaci([p]);
                })

               
            }
           // return new Promise(function(resolve,reject){resolve(k);});
        })
    

    }
    
  //  res.send(req.body)
    

    
    /*fs.readFile("vjezbe.csv", function(err, data){

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
        

        
    })*/

   /* res.send({
        message: "Uspješno dodana aktivnost POST/vjezbe!"
    })*/

});



app.get('/student', function(req,res){
    db.student.findAll().then(function(p){
        
        res.json(p)

     //   res.json(p)
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

app.get('/grupa', function(req,res){
    db.student_grupa.findAll().then(function(p){
        

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


    db.student.findOne({where: {index: req.body.index}}).then(function(p){//console.log(p)
        if(p!=null){
            //res.send("Ima");
            res.send({status:"Student sa indexom {"+req.body.index+"} već postoji!"})
        }
        else {
            studentiListaPromisea.push( db.student.create({
                ime: req.body.ime, 
                prezime: req.body.prezime, 
                index: req.body.index,
                grupa: req.body.grupa
            }));
            Promise.all(studentiListaPromisea).then(function(p){
                
                var stud=p.filter(function(a){return a.index===req.body.index})[0];
               /* JSON.stringify(
                    { 
                        status: "Kreiran student!"
                    }
                 )*/
        
               // res.send(p)
               res.send({status:"Kreiran student!"})


               grupeListaPromisea.push(

                db.grupa.findOne({where: {naziv: req.body.grupa}}).then(function(p){
                 //   alert(req.body.grupa)
                    if(p!=null){
                        //res.send("Ima");
                        return new Promise(function(resolve,reject){resolve(p);});
                        //res.send({status:"Grupa sa nazivom {"+req.body.grupa+"} već postoji!"})
                    }
                    else {
                        db.grupa.create({naziv:req.body.grupa}).then(function(k){
                            k.setStudenti([stud]);
                            return new Promise(function(resolve,reject){resolve(k);});
                        })
                    }
                })
            );

            
           
         /*   grp = stud.getGrupe();
            console.log(grp)*/


              /* grupeListaPromisea.push(

                db.grupa.create({naziv:req.body.grupa}).then(function(k){
                    k.setStudenti([stud]);
                    return new Promise(function(resolve,reject){resolve(k);});
                })
            );*/
         //   Promise.all(grupeListaPromisea);  - da li je potrebno?
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

app.post('/grupa', function(req, res){
    console.log(req.body);


    db.grupa.findOne({where: {naziv: req.body.naziv}}).then(function(p){//console.log(p)
        if(p!=null){
            //res.send("Ima");
            res.send({status:"Grupa sa nazivom {"+req.body.naziv+"} već postoji!"})
        }
        else {
            db.grupa.create({
                naziv: req.body.naziv
            }).then(function(p){
        
               /* JSON.stringify(
                    { 
                        status: "Kreiran student!"
                    }
                 )*/
        
               // res.send(p)
               res.send({status:"Kreirana grupa!"})
             
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





app.put('/student/:index', function(req, res){
    
  //  console.log(req.params.index)
    
    /*db.student.update({
        grupa: req.body.grupa
    }, {where: {index: req.params.index}}).then(function(p){
        //console.log(req.body.grupa)
        console.log(req.body.grupa); 
           res.send({status:"Promjenjena grupa studentu {"+req.body.index+"}"});
    }).catch(function(err){
        res.send("Greska")
    })*/

    //let grp;
    
    db.student.findOne({where: {index: req.params.index}}).then(function(p){//console.log(p)
        if(p==null){
            //res.send("Ima");
            res.send({status:"Student sa indexom {"+req.params.index+"} ne postoji!"})
        }
        else {
            /*studentiListaPromisea.push( db.student.create({
                ime: req.body.ime, 
                prezime: req.body.prezime, 
                index: req.body.index,
                grupa: req.body.grupa
            }));*/

            

            Promise.all(studentiListaPromisea).then(function(p){
               
                var stud=p.filter(function(a){return a.index===req.params.index})[0];

                db.student.findOne({where:{index: req.params.index}}).then(function(andric){
                    andric.getGrupe().then(function(resSet){
                      //  console.log("Lista: ");
                        resSet.forEach(knjiga => {
                            //console.log("\t"+knjiga.naziv);
                            if(knjiga.naziv!=req.body.grupa){
                                knjiga.removeStudenti([stud]);
                            }
                        });
                    });
                });

             //   grp = stud.getGrupe();
                
               /* JSON.stringify(
                    { 
                        status: "Kreiran student!"
                    }
                 )*/
        
               // res.send(p)
              // res.send({status:"Kreiran student!"})
              
              

               grupeListaPromisea.push(

                db.grupa.findOne({where: {naziv: req.body.grupa}}).then(function(t){
                 //   alert(req.body.grupa)
                    if(t!=null){
                        console.log(req.body.grupa)
                        //res.send("Ima");
                        t.setStudenti([stud]);
                     //   t.removeStudenti([stud]);
                        return new Promise(function(resolve,reject){resolve(t);});
                        //res.send({status:"Grupa sa nazivom {"+req.body.grupa+"} već postoji!"})
                    }
                    else {
                      //  grp = stud.getGrupe();
                    //    console.log(grp)
                  //  console.log("aa")
                 
                        db.grupa.create({naziv:req.body.grupa}).then(function(k){
                            k.setStudenti([stud]);
                     //  k.removeStudenti();
                            return new Promise(function(resolve,reject){resolve(k);});
                        })

                    }
                })
            );


            

            res.send({status:"Promjenjena grupa studentu {"+req.params.index+"}"});
               


              /* grupeListaPromisea.push(

                db.grupa.create({naziv:req.body.grupa}).then(function(k){
                    k.setStudenti([stud]);
                    return new Promise(function(resolve,reject){resolve(k);});
                })
            );*/
         //   Promise.all(grupeListaPromisea);  - da li je potrebno?
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
    

   /* 
    return new Promise(function(resolve,reject){



    db.student.findOne({where: {index: req.body.index}}).then(function(p){
       
        if(p==null){
         
            res.send({status:"Student sa indexom {"+req.body.index+"} ne postoji!"})
            return;
           
        }

        else {    

            db.grupa.findOne({where: {naziv: req.body.grupa}}).then(function(k){
                if(k!=null){
              
                    //res.send("Ima");
                    res.send({status:"Grupa sa nazivom {"+req.body.grupa+"} već postoji!"})

                    //var stud=p.filter(function(a){return a.index===req.body.index})[0];

                    console.log(k.naziv);
                    
                }
                else {

               
                }
            }).catch(function(err){
                console.log(err)
                res.send("Greska");
            })
        }

    });

*/
    

    /*Promise.all(autoriListaPromisea).then(function(autori){
        var andric=autori.filter(function(a){return a.ime==='Ivo Andric'})[0];
        var dizdar=autori.filter(function(a){return a.ime==='Mak Dizdar'})[0];

        knjigeListaPromisea.push(
            db.knjiga.create({naziv:'Prokleta avlija',broj:10}).then(function(k){
                k.setAutori([andric]);
                return new Promise(function(resolve,reject){resolve(k);});
            })
        );
    
    })

    }) */
});



  
    


app.get('/izmjenaGrupa.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/izmjenaGrupa.html');
    
  
  
});

app.get('/unosStudenataBatch.html', (req, res) => {

    res.sendFile(__dirname + '/public/html/unosStudenataBatch.html');
    
  
  
});



/*app.get('/student/:index', (req, res) => {

    db.student.findOne({where: {index: req.params.index}}).then(function(p){//console.log(p.grupa)
        if(p!=null){
            //res.send("Ima");
            res.send(p.grupa);} else res.send("nema");
        }).catch(function(err){
            res.send(err)
        })
    
  
  
});*/


         



/*db.grupa.update({
        naziv: req.body.naziv, predmet: req.body.predmet
    }, {where: {id: req.params.id}}).then(function(p){
        res.send("Uredjeno")
    }).catch(function(err){
        res.send("Greska")
    })*/

//           node index.js

/*
    
app.get('/student/:index', (req, res) => {

    
  
});*/

/*
function inicializacija(){
    var autor1,autor2;
    var studentiListaPromisea=[];
    var grupeListaPromisea=[];
    var bibliotekeListaPromisea=[];
    return new Promise(function(resolve,reject){
        studentiListaPromisea.push(db.student.create({
            ime: "Hasan",
            prezime: "Haskovic", 
            index: "17717"
        }));
        studentiListaPromisea.push(db.student.create({
            ime: "Neko",
            prezime: "Nekic", 
            index: "10000"
        }));
    Promise.all(autoriListaPromisea).then(function(autori){
        var andric=autori.filter(function(a){return a.ime==='Ivo Andric'})[0];
        var dizdar=autori.filter(function(a){return a.ime==='Mak Dizdar'})[0];

        knjigeListaPromisea.push(
            db.knjiga.create({naziv:'Prokleta avlija',broj:10}).then(function(k){
                k.setAutori([andric]);
                return new Promise(function(resolve,reject){resolve(k);});
            })
        );
        knjigeListaPromisea.push(
            db.knjiga.create({naziv:'Travnicka hronika',broj:4}).then(function(k){
                k.setAutori([andric]);
                return new Promise(function(resolve,reject){resolve(k);});
            })
        );
        knjigeListaPromisea.push(
            db.knjiga.create({naziv:'Kameni spavac',broj:6}).then(function(k){
                k.setAutori([dizdar]);
                return new Promise(function(resolve,reject){resolve(k);});
            })
        );
        knjigeListaPromisea.push(
            db.knjiga.create({naziv:'Zajednicka knjiga',broj:0}).then(function(k){
                k.setAutori([andric,dizdar]);
                return new Promise(function(resolve,reject){resolve(k);});
            })
        );
        Promise.all(knjigeListaPromisea).then(function(knjige){
     /      var pavlija=knjige.filter(function(k){return k.naziv==='Prokleta avlija'})[0];
            var thronika=knjige.filter(function(k){return k.naziv==='Travnicka hronika'})[0];
            var kspavac=knjige.filter(function(k){return k.naziv==='Kameni spavac'})[0];
            var zknjiga=knjige.filter(function(k){return k.naziv==='Zajednicka knjiga'})[0];
            bibliotekeListaPromisea.push(
                db.biblioteka.create({adresa:'Titova 1'}).then(function(b){
                    return b.setKnjigeBiblioteke([pavlija,thronika]).then(function(){
                    return new Promise(function(resolve,reject){resolve(b);});
                    });
                })
            );
            bibliotekeListaPromisea.push(
                db.biblioteka.create({adresa:'Zmaja od Bosne bb'}).then(function(b){
                    return b.setKnjigeBiblioteke([kspavac,zknjiga]).then(function(){
                    return new Promise(function(resolve,reject){resolve(b);});
                    });
                })
            );
            Promise.all(bibliotekeListaPromisea).then(function(b){resolve(b);}).catch(function(err){console.log("Biblioteke greska "+err);});
              }).catch(function(err){console.log("Knjige greska "+err);});
    }).catch(function(err){console.log("Autori greska "+err);});   
    });
}


     */




app.post('/batch/student', function(req, res){
   
   // console.log(req.body);

   //var csv = req.bodyParser();

   var brojac=0;

      var niz = [];

      let csv = req.body.csvStudenti;

      
      //console.log(csv);




     var arr = csv.split(/\r\n/g);
     

    // console.log(arr);

     for(var i=0; i<arr.length; i++) {
     // alert(arr[i])
      var s = { 
         ime : "", 
         prezime : "",
         index : "",
         grupa : ""
     };


      for(var j=0; j<arr[i].length; j++) {
         if(arr[i][j]==','){

      
            brojac++;
         }

         else if(brojac==0){
           


            s.ime+= arr[i][j];
         }

         else if(brojac==1){
            
            s.prezime+=arr[i][j];
         }
         else if(brojac==2){
            
            s.index+=arr[i][j];
         }
         else if(brojac==3){
            
            s.grupa+=arr[i][j];

         
         }

     

      }

      if(s.ime!="") { 
         niz.push(s);
       
      }
        
      brojac=0;
     

     }



   //  console.log(niz);



     for(var u=0; u<niz.length; u++) {

        var x = niz[u];
            console.log(x);

        db.student.findOne({where: {index: niz[u].index}}).then(function(p){//console.log(p)
           
           
            console.log("x");


            if(p!=null){
                //res.send("Ima");
                //res.send({status:"Student sa indexom {"+niz[u].index+"} već postoji!"})
            }
            else {
                studentiListaPromisea.push( db.student.create({
                    ime: x.ime, 
                    prezime: x.prezime, 
                    index: x.index,
                    grupa: x.grupa
                }));
                Promise.all(studentiListaPromisea).then(function(p){
                    
                    var stud=p.filter(function(a){return a.index===x.index})[0];
                   /* JSON.stringify(
                        { 
                            status: "Kreiran student!"
                        }
                     )*/
            
                   // res.send(p)
              //     res.send({status:"Kreiran student!"})
    
    
                   grupeListaPromisea.push(
    
                    db.grupa.findOne({where: {naziv: x.grupa}}).then(function(p){
                     //   alert(req.body.grupa)
                        if(p!=null){
                            //res.send("Ima");
                            return new Promise(function(resolve,reject){resolve(p);});
                            //res.send({status:"Grupa sa nazivom {"+req.body.grupa+"} već postoji!"})
                        }
                        else {
                            db.grupa.create({naziv:x.grupa}).then(function(k){
                                k.setStudenti([stud]);
                                return new Promise(function(resolve,reject){resolve(k);});
                            })
                        }
                    })
                );
    
                
               
             /*   grp = stud.getGrupe();
                console.log(grp)*/
    
    
                  /* grupeListaPromisea.push(
    
                    db.grupa.create({naziv:req.body.grupa}).then(function(k){
                        k.setStudenti([stud]);
                        return new Promise(function(resolve,reject){resolve(k);});
                    })
                );*/
             //   Promise.all(grupeListaPromisea);  - da li je potrebno?
               //  res.send({status: "Kreiran student!"});
            
                }).catch(function(err){
                    console.log(err)
                    //res.send("Greska")
                })
            }
        }).catch(function(err){
            console.log(err)
           // res.send("Greska");
        })
    
     }
     

});


app.listen(3000);

