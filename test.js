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

  describe('dohvatiPodatke()', function() {
   // const fs = FileReader;

    it('Broj kolona tabele odgovara broju elemenata parametra dani', function() {
      let okvir = document.createElement("DIV");
      okvir.setAttribute("id", "okvir");

      var dataJson;

      

      let y ="a";
      let x = null;
      var f = modul.myFunction(x,y);
      
   //   modul.dohvatiPodatke();
      
      
     assert.equal(modul.myFunction.y, dataJson, "Isto");

      myapi.get(function(err, result) {
        console.log(result);
       // result.should.deep.equal(modul.myFunction);
        done();
      });

      

     /* var data = { foo: 'bar' };
      var dataJson = JSON.stringify(data);

      myapi.get(function(err, result) {
        result.should.deep.equal(data);
        done();
      });
      
      this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);*/

      /*Raspored.iscrtajRaspored(okvir1, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
      Raspored.iscrtajRaspored(okvir2, ['Utorak', 'Srijeda', 'Petak'], 6, 17);
      let table1 = okvir1.firstChild;
      let table2 = okvir2.firstChild;

      assert.equal(table1.childElementCount - 1, 5, "Broj redova treba biti 5");
      assert.equal(table2.childElementCount - 1, 3, "Broj redova treba biti 3");*/
    });

  });

});

