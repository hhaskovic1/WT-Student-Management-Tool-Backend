window.onload=function(){

    var s = { 
        ime : "", 
        prezime : "",
        index : "",
        grupa : ""
    };
  
      const form = document.getElementById('form');
      var city = document.getElementById('city');
      

      
      form.onsubmit = submit;
      function submit(event) {
          form.setAttribute('hidden', '');
         
          
          form.id = "form2";

         // document.getElementById("okvir")

          for(let i=0;i<city.value;i++) {
            var s = document.createElement("label");
            s.innerHTML = "Student "+(i+1)+"&nbsp-&nbsp";

            var a = document.createElement("label");
            a.innerHTML = "Ime: &nbsp";
            var b = document.createElement("input");
            b.value="Hasan";
            b.id="ime"+(i+1);
            
            var c = document.createElement("label");
            c.innerHTML = "&nbspPrezime: &nbsp";
            var d = document.createElement("input");
            d.value="Hask";
            d.id="prez"+(i+1);

            var e = document.createElement("label");
            e.innerHTML = "&nbspIndex: &nbsp";
            var f = document.createElement("input");
            f.value=(10000+i);
            f.id="ind"+(i+1);

            var g = document.createElement("label");
            g.innerHTML = "&nbspGrupa: &nbsp";
            var h = document.createElement("input");
            h.value="WTLAB2";
            h.id="grup"+(i+1);
            
            linebreak = document.createElement("br");

            document.getElementById("okvir").appendChild(s);
            document.getElementById("okvir").appendChild(a);
            document.getElementById("okvir").appendChild(b);
            document.getElementById("okvir").appendChild(c);
            document.getElementById("okvir").appendChild(d);
            document.getElementById("okvir").appendChild(e);
            document.getElementById("okvir").appendChild(f);
            document.getElementById("okvir").appendChild(g);
            document.getElementById("okvir").appendChild(h);
            document.getElementById("okvir").appendChild(linebreak);

            /*var a = document.createElement("label");
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
            DOMelementDIVauFormi.appendChild(linebreak);*/
            
         }
      
         linebreak = document.createElement("br");
         document.getElementById("okvir").appendChild(linebreak);
      
         button = document.createElement("button");
         button.name="Unesi";
         button.innerHTML="Unesi";
         button.id="btn";
           
         button.onclick = function() {  

            let data = "";

        //  let data = [];

            let l = document.getElementById("okvir").childNodes;

         //   alert(l[2].innerHTML);
         //   alert(l[3].value);
       //  alert(l[5].value);
         //alert(l[13].value);

         var brojac = 0;
            
         



         for(var x=0; x<l.length; x++) {
       //     alert(l[x].id);
            if(l[x].id=="ime"+(brojac+1))  {
                brojac++;
               
                data+=l[x].value+',';
           /*   s = new Object();
              s.ime=l[x].value;*/
            }
            else if(l[x].id=="prez"+(brojac))  {
                
                data+=l[x].value+',';
           //   s.prezime=l[x].value;
            }
            else if(l[x].id=="ind"+(brojac))  {
               
                data+=l[x].value+',';
        //    s.index=l[x].value;
            }
            else if(l[x].id=="grup"+(brojac))  {
              
                data+=l[x].value+"\r\n";
        //     s.grupa=l[x].value;
        //     data.push(s);
            }
         }

         
      /*   let csvContent = "data:text/csv;charset=utf-8," 
         + data.map(e => e.join(",")).join("\n");*/

       /*  let csvContent = "data:text/csv;charset=utf-8," 
    + data.map(e => e.join(",")).join("\n");*/

//alert(data[0].ime)
//alert(data)

     //    alert(l[2].innerHTML);
           // unos.fun() 
         //  let fun = function() {  
            //document.getElementById("btn").innerHTML = document.getElementById("okvir").childElementCount;  
            
            //document.getElementById("okvir").setAttribute('hidden', '');
            
            
           /* document.getElementById("okvir").childNodes.forEach(
               element => console.log(element)
               
            );*/
        
         /*   let l = document.getElementById("okvir").childNodes;
        
         
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
        
            
        
           modul.posaljiPodatke(obj,modul.myFunction);*/

           


          novi.dodajBatch(data,function(error,data){
            document.getElementById("ajaxstatus").innerHTML=data.responseText;
   
        }); 
         
         };  

         //let csvContent = "data:text/csv;charset=utf-8,";
      
         document.getElementById("okvir").appendChild(button);

        //  modul.dodajInputPolja(document.getElementById("okvir"),city.value);

      /*  var dodajInputPolja = function(DOMelementDIVauFormi,brojVjezbi) {

            
         
            
            
            var a = document.createElement("label");
            a.innerHTML = "Broj zadataka: ";
            
           
            
            
            DOMelementDIVauFormi.appendChild(a);
         
            linebreak = document.createElement("br");
            DOMelementDIVauFormi.appendChild(linebreak);
            
         
         
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
         
         
            
         
                 
              
           
         
         }*/
          
          // For this example, don't actually submit the form
          event.preventDefault(); // ?
      
          but = document.getElementById("btn");
          
          
      
      }
    
    
    
  }
   