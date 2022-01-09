/*const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 8085;

app.get('/unosVjezbi.html', (req, res) => {
    res.sendFile(__dirname + '/unosVjezbi.html');
});

app.listen(PORT);*/

var city = document.getElementById('city');

//var vrijednost = city.value;

form.onsubmit = submit;
function submit(event) {
    form.setAttribute('hidden', '');
   
    
    form.id = "form2";
    modul.dodajInputPolja(document.getElementById("okvir"),city.value);
    
    // For this example, don't actually submit the form
    event.preventDefault(); // ?

    but = document.getElementById("btn");
    
    

}

let unos = (function() {


    let f1 = function() {  

const form = document.getElementById('form');
var city = document.getElementById('city');

//var vrijednost = city.value;

form.onsubmit = submit;
function submit(event) {
    form.setAttribute('hidden', '');
   
    
    form.id = "form2";
    modul.dodajInputPolja(document.getElementById("okvir"),city.value);
    
    // For this example, don't actually submit the form
    event.preventDefault(); // ?

    but = document.getElementById("btn");
    
    

}
}


let fun = function() {  
    //document.getElementById("btn").innerHTML = document.getElementById("okvir").childElementCount;  
    
    //document.getElementById("okvir").setAttribute('hidden', '');
    
    
   /* document.getElementById("okvir").childNodes.forEach(
       element => console.log(element)
       
    );*/

    let l = document.getElementById("okvir").childNodes;

    //Broj zadataka: l[1].textContent
     //l[4 7 10].value; 
   // document.getElementById("btn").innerHTML = l[4].value;  
    var obj = { 
        brojVjezbi : 0, 
        brojZadataka : null
    };

    var obj = new Object();
    broj = [];

    var br = -1;
    for(i=0; i<l.length;i++) {
        if(l[i].value>=0 && l[i].value<=10) {
            broj.push(l[i].value);
            br++;
        }

            
    }
    broj2 = [];
    for(i=0; i<broj.length-1;i++) {
        broj2.push(broj[i]);
    }
   
    obj.brojVjezbi=br;
    obj.brojZadataka=broj2;

    /*document.getElementById("btn").innerHTML = broj[5];

    document.getElementById("btn").innerHTML = broj.length;*/
    
    //modul.posaljiPodatke(obj,function(error,data){});


   modul.posaljiPodatke(obj,modul.myFunction);
  // modul.dohvatiPodatke(modul.myFunction);
   



   // document.getElementById("btn").innerHTML = broj.length;
}  
  

return {
    f1:f1,
    fun: fun
  }
}());