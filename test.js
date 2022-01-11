chai.should();
let assert = chai.assert;

 

describe('VjezbeAjax', function() {

  beforeEach(function() {
    this.xhr = sinon.useFakeXMLHttpRequest();
 
    this.requests = [];
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  });

  
 
  afterEach(function() {
    this.xhr.restore();
  });


  describe('dodajInputPolja()', function() {

   

    it('Pocetni broj input polja odgovara broju vjezbi', function(done) {

      var data = {brojVjezbi: 5};
      var dataJson = JSON.stringify(data);
    
      let okvir = document.createElement("DIV");
      okvir.setAttribute("id", "okvir");
      modul.dodajInputPolja(okvir,data.brojVjezbi);

      
      var brojac=0;
     
      for(var i=0; i<okvir.children.length;i++) {
        if(okvir.children[i].tagName.toLowerCase("input") && okvir.children[i].id[1]==i/3-1){ 
          brojac++;
        }
       
      }
      assert.equal(brojac, 5,"Broj input polja treba biti 5");
  
     


      myapi.get(function(err, result) {
           /*console.log(result);
           result.should.deep.equal(data);*/
           done();
         });
        
         this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
    });

    it('Pocetna vrijednost svih input polja je 4', function(done) {

      var data = {brojVjezbi: 8};
      var dataJson = JSON.stringify(data);
    
      let okvir = document.createElement("DIV");
      okvir.setAttribute("id", "okvir");
      modul.dodajInputPolja(okvir,data.brojVjezbi);


   
      var brojac=0;
      for(var i=0; i<okvir.children.length;i++) {
        
        if(okvir.children[i].tagName.toLowerCase("input") && okvir.children[i].value==4){
          brojac++;
        }
      }
    
      assert.equal(brojac, 8,"Pocetna vrijednost svih input polja treba biti 4");
       

      myapi.get(function(err, result) {
           /*console.log(result);
           result.should.deep.equal(data);*/
           done();
         });
        
         this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
    });

    it('Input polja imaju naziv i id oblika zi gdje i ide od 0 do brojVjezbi', function(done) {

      var data = {brojVjezbi: 4};
      var dataJson = JSON.stringify(data);
    
      let okvir = document.createElement("DIV");
      okvir.setAttribute("id", "okvir");
      modul.dodajInputPolja(okvir,data.brojVjezbi);


   
      var brojac=0;
      for(var i=0; i<okvir.children.length;i++) { 
        if(okvir.children[i].tagName.toLowerCase("input") && okvir.children[i].id=="z"+(i/3-1)&& okvir.children[i].name=="z"+(i/3-1)){
          brojac++;
        }
      }
    
      assert.equal(brojac, 4,"Nazivi i id-evi polja trebaju da glase z0,z1,z2,z3");
       

      myapi.get(function(err, result) {
           /*console.log(result);
           result.should.deep.equal(data);*/
           done();
         });
        
         this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
    });


  
    


  });





  describe('posaljiPodatke()', function() {

    

    it('Podaci koji se salju moraju biti isti kao podaci koji se onda dobivaju preko GET', function(done) {

      var data = {brojVjezbi: 5, brojZadataka:[1,2,3,4,5]};
      var dataJson = JSON.stringify(
        { 
           brojVjezbi: data.brojVjezbi, brojZadataka: data.brojZadataka 
        }
      )


      myapi.get(function(err, result) {

        modul.posaljiPodatke(data,modul.myFunction);
        result.should.deep.equal(data);

        done();
      });
     
      this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);

    });

    it('Podaci koji se salju metodom moraju biti isti kao da ih saljemo preko POST', function() {
      
      var data = {brojVjezbi: 5, brojZadataka:[1,2,3,4,5]};
      
      myapi.post(data, function() {
        modul.posaljiPodatke(data,modul.myFunction);
      });

      var dataJson = JSON.stringify(
        { 
           brojVjezbi: data.brojVjezbi, brojZadataka: data.brojZadataka 
        }
     )
     
      this.requests[0].requestBody.should.equal(dataJson);
    });

   

  });


  describe('dohvatiPodatke()', function() {

    it('TEST', function() {
      
    });


  });

  describe('iscrtajVjezbe()', function() {

    it('Broj dodanih divova za iscrtavanje liste vjezbi mora biti jednak broju vjezbi', function(done) {

      var data = {brojVjezbi: 13};
      var dataJson = JSON.stringify(
        { 
           brojVjezbi: data.brojVjezbi
        }
      )

      let okvir = document.createElement("DIV");
      okvir.setAttribute("id", "okvir");
      
      modul.iscrtajVjezbe(okvir,data);

      
      var brojac=0;
     
      for(var i=0; i<okvir.children.length;i++) {
        if(okvir.children[i].tagName.toLowerCase("div")){ 
          if(okvir.children[i].innerHTML=="Vjezba"+(i/2+1)) {
            brojac++;
            
          
          }
        
         
        }
       
      }

      assert.equal(brojac, 13,"Broj divova za vjezbe treba biti 13");


      myapi.get(function(err, result) {

        modul.posaljiPodatke(data,modul.myFunction);
        result.should.deep.equal(data);

        done();
      });
     
      this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);

    });


    it('TEST', function() {
      
    });


  });


  describe('iscrtajZadatke()', function() {

    it('TEST', function(done) {


      var data = {brojVjezbi: 5};
      var dataJson = JSON.stringify(data);
    
      let okvir = document.createElement("DIV");
      okvir.setAttribute("id", "okvir");
      modul.dodajInputPolja(okvir,data.brojVjezbi);

      
      var brojac=0;
     
      for(var i=0; i<okvir.children.length;i++) {
        if(okvir.children[i].tagName.toLowerCase("input") && okvir.children[i].id[1]==i/3-1){ 
          brojac++;
        }
       
      }
      assert.equal(brojac, 5,"Broj input polja treba biti 5");
  
     


      myapi.get(function(err, result) {
           /*console.log(result);
           result.should.deep.equal(data);*/
           done();
         });
        
         this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);

      
    });

  });

});

