
let modul = (function() {

   var dodajInputPolja = function(DOMelementDIVauFormi,brojVjezbi) {

      //DOMelementDIVauFormi = document.getElementById("okvir1");
   
      
      
      var a = document.createElement("label");
      a.innerHTML = "Broj zadataka: ";
      
     /* var b = document.createElement("input");
      b.value=4;
      b.name="zid";
      b.id = "zid";
      b.max=15;
      b.min=0;*/
      
      
      
      DOMelementDIVauFormi.appendChild(a);
   
      linebreak = document.createElement("br");
      DOMelementDIVauFormi.appendChild(linebreak);
      
      
     // DOMelementDIVauFormi.appendChild(linebreak);
      
      /*for(let i=0;i<brojVjezbi;i++) {
         DOMelementDIVauFormi.appendChild(a);
         DOMelementDIVauFormi.appendChild(b);
         DOMelementDIVauFormi.appendChild(linebreak);
      }*/
   
      for(let i=0;i<brojVjezbi;i++) {
         var a = document.createElement("label");
         a.innerHTML = "z"+i+"&nbsp";
         if(i<10)a.innerHTML+="&nbsp&nbsp";
         var b = document.createElement("input");
         b.value=4;
         b.name="z"+i;
         b.id = "z"+i;
         b.max=10;
         b.min=0;
         linebreak = document.createElement("br");
         DOMelementDIVauFormi.appendChild(a);
         DOMelementDIVauFormi.appendChild(b);
         DOMelementDIVauFormi.appendChild(linebreak);
         
      }
   
      linebreak = document.createElement("br");
      DOMelementDIVauFormi.appendChild(linebreak);
   
      button = document.createElement("button");
      button.name="Unesi";
      button.innerHTML="Unesi";
      button.id="btn";
        
      button.onclick = function() {  
         unos.fun()  
      };  
   
      DOMelementDIVauFormi.appendChild(button);
   
   
      
   
           
        
     
   
   }
//<button type="button" onclick="loadDoc('ajax_info.txt', myFunction)">Klik</button>
   
   
   var posaljiPodatke = function(vjezbeObjekat,callbackFja) {
      
      var obj = { 
         brojVjezbi : 0, 
         brojZadataka : null
     };
   
     function f(data,error){};
     
   
      var obj = new Object();
      obj = vjezbeObjekat;
   
     // document.getElementById("btn").innerHTML = obj.brojVjezbi+" ";
    //  document.getElementById("btn").innerHTML+=obj.brojZadataka;
   
      //document.getElementById("btn").addEventListener("click", listener1);
      // document.getElementById("posalji").addEventListener("click",function(){pokusajAjax(pokusaj.value,ispisi);})
     // function listener1(){
      var ajax = new XMLHttpRequest();

      ajax.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            callbackFja(null,this);
         }
         if (ajax.readyState == 4 && ajax.status == 404)
              console.log('Greska ima');
      };

      /*ajax.onreadystatechange = () => {
          if (ajax.readyState == 4 && ajax.status == 200)
              document.getElementById("okvir").innerHTML = ajax.responseText;
          //    console.log(ajax.responseText);
          if (ajax.readyState == 4 && ajax.status == 404)
              console.log('Greska ima');
      }*/
   
   
   
      ajax.open("POST", "http://localhost:3000/vjezbe", true);
      ajax.setRequestHeader('Content-type', "application/json");
      ajax.send(
         JSON.stringify(
            { 
               brojVjezbi: obj.brojVjezbi, brojZadataka: obj.brojZadataka 
            }
         )
      )
      f.error=null;
      f.data=obj;
   
      //callbackFja=f;
     
      return false;
   
      
   
     // }
      
   
   
   }
   
   var dohvatiPodatke = function(callbackFja) {

     // console.log('ssss');

     

   
      var ajax = new XMLHttpRequest();


      
     /* ajax.onreadystatechange = () => {
          if (ajax.readyState == 4 && ajax.status == 200)callbackFja(null,this);

        
          if (ajax.readyState == 4 && ajax.status == 404)
              console.log('Greska ima');
      }*/
      ajax.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
          //  console.log(this.responseText);
         //   callbackFja(null,this);
         //   var jsonRez = JSON.parse(ajax.responseText);
            callbackFja(null,this);
          //  console.log(data.responseText);
          //  iscrtajVjezbe(document.getElementById("okvir"),this.responseText);
         }

         
         if (ajax.readyState == 4 && ajax.status == 404)
              console.log('Greska ima');
      };
      
      
      ajax.open("GET", "http://localhost:3000/vjezbe", true);

      ajax.send();


    /*  ajax.send(
         JSON.stringify(
            { 
               data: data
            }
         )
      )*/
      
      
      
      //f.data=ajax.response;
     
      
   
      

     // document.getElementById("btn").innerHTML = data;

      return false;
   }

   var iscrtajVjezbe = function(divDOMelement,obj) {


     // let divovi = [];
      let div1;
    for(i=0;i<obj.brojVjezbi;i++){

      div1 = document.createElement("div");
      div1.id=i+1;
      div1.innerHTML="Vjezba"+(i+1);
      div1.className=".example";
   //   divovi.push(div1);

    
      divDOMelement.appendChild(div1);

     
      
      linebreak = document.createElement("br");
      divDOMelement.appendChild(linebreak);
   }

   
    /*for(i=0;i<obj.brojVjezbi;i++)funkc(i+1,obj.brojZadataka[i]); 
    i=0;*/
    document.addEventListener("click", function(event) {
      if (event.target.tagName.toLowerCase()=="div" && event.target.id.toLowerCase()!="okvir" && event.target.id[0]!="z") //can also be used as elem.target.tagName.toLowerCase()=="input"
      {


       // console.log("Using focusout : " + event.target.id);
     //  event.target.innerHTML=event.target.id;

       iscrtajZadatke(event.target,obj.brojZadataka[event.target.id-1])

       //event.target.id="x"+event.target.id;

        event.preventDefault();
      }
    });
 
      
  

   }
  
   var iscrtajZadatke = function(vjezbaDOMelement,brojZadataka) {

     
      


    //  vjezbaDOMelement.innerHTML="aaaaaaann";
      if(vjezbaDOMelement.id[0]!="x"){

         vjezbaDOMelement.id="x"+vjezbaDOMelement.id;

      linebreak = document.createElement("br");
      vjezbaDOMelement.appendChild(linebreak); 

      for(i=0;i<brojZadataka;i++){
         div1 = document.createElement("div");
         div1.id="z"+i+1;
         div1.innerHTML="Zadatak"+(i+1)+"&nbsp&nbsp&nbsp";
         vjezbaDOMelement.appendChild(div1); 
      }

      

      /*let djeca = document.getElementById("okvir").childNodes;
      for(var i=0; i<djeca.length; i++) {
         
         if(djeca[i].id[0]=="x"){
            let dj = djeca[i].childNodes;
            if(!dj[0].hidden){
               for(var j=0;j<dj.length;j++){
                  dj[j].hidden=true;
               }
            }
            
         
         }

      }

    //  if(!vjezbaDOMelement.getElementById("z1").hidden)

   }


   /*if(vjezbaDOMelement.id[0]=="x") {
      
      if(!vjezbaDOMelement.getElementById("z1").hidden) {
       
         for(i=0;i<brojZadataka;i++){
            vjezbaDOMelement.childNode[i].hidden=true;
         }

      }


   }*/}

   
      let djeca = document.getElementById("okvir").childNodes;
 
    /* 1 3 5 itd
     djeca[1].innerHTML="AA";*/

    /*2 4 6
    let dj = djeca[1].childNodes;
    dj[2].innerHTML="BBB";*/
    
    /*  for(var i=0; i<djeca.length; i++) {
         if(djeca[i].id[0]=="x")djeca[i].hidden=true;
      
   }*/

   /*let dj = djeca[1].childNodes;
   dj[2].setAttribute("hidden", true);*/
   
   for(var i=0; i<djeca.length; i++) {
      if(djeca[i].id!=vjezbaDOMelement.id && i%2!=0){
         dj = djeca[i].childNodes;
         for(var j=0;j<dj.length;j++) {
            //if(j>=2)dj[j].setAttribute("hidden", true);
            if(j>=2)dj[j].style.display = "none";
         }
      }
      
   
   }

   //element.style.display = "none";

   for(var i=0; i<djeca.length; i++) {
     if(djeca[i].id==vjezbaDOMelement.id && i%2!=0){
         dj = djeca[i].childNodes;
         for(var j=0;j<dj.length;j++) {
            if(j>=2){
            //   dj[j].setAttribute("hidden", false);
               //dj[j].innerHTML="BBB";
               if(j>=2)dj[j].style.display = "contents";
            }
         }
      }
      
   
   }
   
   
}

   var myFunction = function(error,data) {
     // document.getElementById("okvir").innerHTML = ajax.responseText;
     console.log(data.responseText);
   //  data = data.responseText;
   }

   var myFunction2 = function(error,data) {
     //  document.getElementById("okvir").innerHTML = "asas";

//{"brojVjezbi":13,"brojZadataka":["4","4","6","4","7","7","4","4","4","8","9","10","4"]}
      let obj =data.responseText;

      var objekat = { 
         brojVjezbi : 0, 
         brojZadataka : null
     };
 
     var objekat = new Object();

      let s ="";
      s+=obj[14];
      if(obj[15]!=",")s+=obj[15];
    //  divDOMelement.innerHTML = s;
    
      objekat.brojVjezbi=s;

      var x;
      for(i=15;i<obj.length;i++){
         if(obj[i]=="[")x=i+2;
      }

      niz = [];
   
      niz.push(obj[x]);
      
      var broj =""; 

      for(i=x+1;i<obj.length;i++){

         if(obj[i]>=0 && obj[i]<=10) {
            if(obj[i]!=",")broj+=obj[i];
            //niz.push(obj[i]);
         }
         else if(obj[i]=="\""){
            if(broj!="," && broj!="")niz.push(broj);
            broj="";
         }
      }

   //   divDOMelement.innerHTML = niz;
 /*  niz2 = [];
   for(i=0; i<niz.length; i++) {
      if(niz[i]!="")niz2.push(niz[i]);
   }*/
   
   objekat.brojZadataka=niz;

   //document.getElementById("okvir").innerHTML = objekat.brojZadataka;

      iscrtajVjezbe(document.getElementById("okvir"),objekat);

      console.log(data.responseText);

      //return data.responseText;
    //  console.log(data.responseText);
    }
   

   return {
      dodajInputPolja: dodajInputPolja,
      posaljiPodatke: posaljiPodatke,
      dohvatiPodatke: dohvatiPodatke,
      myFunction: myFunction,
      myFunction2: myFunction2,
      iscrtajZadatke:iscrtajZadatke,
      iscrtajVjezbe:iscrtajVjezbe
      
    }
  }());