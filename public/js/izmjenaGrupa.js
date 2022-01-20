window.onload=function(){

    

   /* var student = { 
        ime : "", 
        prezime : "",
        index : 0,
        grupa : 0
    };

    var student = new Object();*/

    //  var ime = document.getElementById('ime');
    //  var prezime = document.getElementById('prezime');
      var index = document.getElementById('index');
      var grupa = document.getElementById('grupa');
      var button = document.getElementById('prvi');
      
      //document.getElementById("posalji").addEventListener("click",function(){pokusajAjax(pokusaj.value,ispisi);})
    

      form.onsubmit = submit;

      function submit(event) {
   
       // alert(index.value +" " +grupa.value);
       
    

       /*   student.ime=ime.value;
          student.prezime=prezime.value;
          student.index=index.value;
          student.grupa=grupa.value;*/
          
        //  button.addEventListener("click",function(){novi.dodajStudenta(student,novi.myFunction);})
         // novi.dodajStudenta(student,novi.myFunction);

         button.onclick = novi.postaviGrupu(index.value,grupa.value,function(error,data){
            document.getElementById("ajaxstatus").innerHTML=data.responseText;
   
        }); 

     
     
         

        // button.innerHTML="aa";

        
         
      
         event.preventDefault(); 
      
      }
    
    
    
  }

  /*var fun = function(student) {
    novi.dodajStudenta(student,novi.myFunction);
  }*/

  
  
