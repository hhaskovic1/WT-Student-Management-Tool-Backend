let novi = (function() {

    var dodajStudenta = function(student,callbackFja) {
      
      var obj = { 
         ime : "", 
         prezime : "",
         indeks : 0,
         grupa : 0
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
                 ime: obj.ime, prezime: obj.prezime, indeks: obj.indeks, grupa: obj.grupa 
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

     var myFunction = function(error,data) {
      // document.getElementById("okvir").innerHTML = ajax.responseText;
      
       //alert(data)
    //  data = data.responseText;
    }

    
   return {
    dodajStudenta: dodajStudenta,
    myFunction:myFunction
  }
}());

