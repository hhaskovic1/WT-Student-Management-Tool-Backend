window.onload=function(){
    var student = { 
        ime : "", 
        prezime : "",
        indeks : 0,
        grupa : 0
    };

    var student = new Object();

      var ime = document.getElementById('ime');
      var prezime = document.getElementById('prezime');
      var indeks = document.getElementById('indeks');
      var grupa = document.getElementById('grupa');
      var button = document.getElementById('prvi');
      
      //document.getElementById("posalji").addEventListener("click",function(){pokusajAjax(pokusaj.value,ispisi);})
    

      form.onsubmit = submit;
      function submit(event) {
   
        
          student.ime=ime.value;
          student.prezime=prezime.value;
          student.indeks=indeks.value;
          student.grupa=grupa.value;
          
        //  button.addEventListener("click",function(){novi.dodajStudenta(student,novi.myFunction);})
         // novi.dodajStudenta(student,novi.myFunction);

         button.onclick = novi.dodajStudenta(student,function(error,data){
            document.getElementById("ajaxstatus").innerHTML=data.responseText;
         //   alert(data.responseText)
       //   return data;
        }); 

     
     
         

        // button.innerHTML="aa";

        
         
      
         event.preventDefault(); 
      
      }
    
    
    
  }

  /*var fun = function(student) {
    novi.dodajStudenta(student,novi.myFunction);
  }*/

  
  
