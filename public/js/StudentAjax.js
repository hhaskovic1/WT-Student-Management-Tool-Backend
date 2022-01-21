/*
var dodajStudenta = function(student,callbackFja) {
      
      var obj = { 
         ime : "", 
         prezime : "",
         index : "",
         grupa : ""
     };


     
      
     
      var obj = new Object();
      obj = student;

      let str="";
   
      var ajax = new XMLHttpRequest();

      ajax.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {

          
//{"status":"Kreiran student!"}
         
            callbackFja(null,this);


            var ajax2 = new XMLHttpRequest();
            ajax2.onreadystatechange = function() {

             if (ajax2.readyState == 4 && ajax2.status == 200) {
                callbackFja(null,ajax2);
                str=ajax2.responseText;
              //  if(str=="{\"status\":\"Kreiran student!\"}")alert(str);
             }

             if (ajax2.readyState == 4 && ajax2.status == 404)
             //   console.log('Greska ima');
                callbackFja("Greska ima",null);
            };
            ajax2.open("POST", "http://localhost:3000/grupa", true);
            ajax2.setRequestHeader('Content-type', "application/json");//alert(callbackFja.responseText);
            
            if(document.getElementById("ajaxstatus").innerHTML!="{\"status\":\"Kreiran student!\"}"){
               alert(document.getElementById("ajaxstatus").innerHTML);
               return;
            }
            ajax2.send(
               JSON.stringify(
                  { 
                   
                   naziv: obj.grupa
                  }
               )
            )
         }
         if (ajax.readyState == 4 && ajax.status == 404)
           //   console.log('Greska ima');
              callbackFja("Greska ima",null);

              //alert(ajax2.responseText);
      };
  //    alert(str);
      ajax.open("POST", "http://localhost:3000/student", true);
      ajax.setRequestHeader('Content-type', "application/json");
      ajax.send(
         JSON.stringify(
            { 
             ime: obj.ime, prezime: obj.prezime, index: obj.index, grupa: obj.grupa 
            }
         )
      )

    
     
      return false;
   
      
   
     
      
   
   
   }

*/


let novi = (function() {

    var dodajStudenta = function(student,callbackFja) {
      
      var obj = { 
         ime : "", 
         prezime : "",
         index : "",
         grupa : ""
     };


     
      /*let btn = document.getElementById("button");
      btn.innerHTML = "a";*/
       
     
        var obj = new Object();
        obj = student;
     
        var ajax = new XMLHttpRequest();
  
        ajax.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {

           
              callbackFja(null,this);

           }
           if (ajax.readyState == 4 && ajax.status == 404)
             //   console.log('Greska ima');
                callbackFja("Greska ima",null);
        };
   
        ajax.open("POST", "http://localhost:3000/student", true);
        ajax.setRequestHeader('Content-type', "application/json");
        ajax.send(
           JSON.stringify(
              { 
                 ime: obj.ime, prezime: obj.prezime, index: obj.index, grupa: obj.grupa 
              }
           )
        )
        
       // f.error=null;
    //    f.data=obj;
       // console.log(ajax.responseText);
       
      //  alert("ajax.responseText")

    //  alert(data)
      //  document.getElementById("ajaxstatus").innerHTML ="aaa";

    
        //callbackFja=f;
       
        return false;
     
        
     
       // }
        
     
     
     }


/*  var postaviGrupu = function(index,grupa, callbackFja = function(error,data){ alert("data.responseText")
      document.getElementById("ajaxstatus").innerHTML=data.responseText;

  }) {

*/ 

     var postaviGrupu = function(index,grupa,callbackFja) {

     // document.getElementById("ajaxstatus").innerHTML="AAAAAA"
     //  document.getElementById("ajaxstatus").innerHTML="AAAAAA"


      /*var ajax = new XMLHttpRequest();
  
      ajax.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {

         
            callbackFja(null,this);

         }
         if (ajax.readyState == 4 && ajax.status == 404)
           //   console.log('Greska ima');
              callbackFja("Greska ima",null);
      };
 
      ajax.open("PUT", "http://localhost:3000/student:"+index, true);
      ajax.setRequestHeader('Content-type', "application/json");
      ajax.send(
         body
      )*/

      

var data = { 
   index : "",
   grupa : ""
};

var data = new Object();


data.index = index;
data.grupa  = grupa;
//var json = JSON.stringify(data);
//alert(index);
//alert(json);

var ajax = new XMLHttpRequest();
ajax.open("PUT", "http://localhost:3000/student/"+index, true);

/*var url = "http://localhost:3000/student:"+index;
      alert(url);*/

     // document.getElementById("ajaxstatus").innerHTML="AAAAAA"

ajax.setRequestHeader('Content-type','application/json; charset=utf-8');
ajax.onreadystatechange = function () {
  // document.getElementById("ajaxstatus").innerHTML="BB"
   //document.getElementById("ajaxstatus").innerHTML="AAAAAA"
   //alert(json);
   // var users = JSON.parse(ajax.responseText);
    if (ajax.readyState == 4 && ajax.status == "200") {

     // document.getElementById("ajaxstatus").innerHTML="AAAAAA"
      callbackFja(null,this);

     // let odgovori = JSON.parse(ajax.responseText)
      document.getElementById("ajaxstatus").innerHTML = ajax.responseText;

    } else {
      callbackFja("Greska ima",null);
    }
}
//ajax.send({grupa: data.grupa});
//alert("http://localhost:3000/student/:"+index)
ajax.send(
   JSON.stringify(
      { 
         grupa:data.grupa
      }
   )
)
      
     }


     var dodajBatch = function(csvStudenti,callbackFja) {

   //   alert(csvStudenti)

      var ajax = new XMLHttpRequest();
  
        ajax.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {

           
              callbackFja(null,this);

           }
           if (ajax.readyState == 4 && ajax.status == 404)
             //   console.log('Greska ima');
                callbackFja("Greska ima",null);
        };
   
        ajax.open("POST", "http://localhost:3000/batch/student", true);
        ajax.setRequestHeader('Content-type', "application/json");
        ajax.send(
           JSON.stringify(
              
            {csvStudenti}   
              
           )
        )
      
      /*
      var brojac=0;

      let niz = [];

      

     var arr = csvStudenti.split(/\r\n/g);
     

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

     for(var p=0;p<niz.length;p++){

      dodajStudenta(niz[p],function(error,data){
         document.getElementById("ajaxstatus").innerHTML=data.responseText;
  
     }); 

     }
*/
     
     }

     


     

     var myFunction = function(error,data) {
      // document.getElementById("okvir").innerHTML = ajax.responseText;
      
      //document.getElementById("ajaxstatus").innerHTML=data.responseText;
    //  data = data.responseText;
    }

    
   return {
    dodajStudenta: dodajStudenta,
    postaviGrupu: postaviGrupu,
    dodajBatch: dodajBatch,
    myFunction: myFunction
  }
}());

