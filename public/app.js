var nation = JSON.parse(localStorage.getItem('nation')) || [];
var form = document.createElement('form')
var dropdown = document.createElement('select')


window.onload = function(){
  setup();
  var center = { lat: nation.latlng[0], lng:  nation.latlng[1]}
  var marker = "2"
  var map = new Map(center, 6)
  // map.addMarker(center, marker)
  var info = "Country: " + nation.name + 
             "Population: " + nation.population + 
             "Capital: " + nation.capital
  map.addInfoWindow(center, info)
    }

  var setup = function(){

    var ul = document.getElementById('country-list')
    p = document.createElement('p')
    p.innerText = "Country: " + nation.name + "\n" +
                  "Population: " + nation.population + "\n" +
                  "Capital: " + nation.capital
    ul.appendChild(p)
    countrySelector();
    style();
    }

    var countrySelector = function(){
      var url = "https://restcountries.eu/rest/v1";
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function(){
      if (request.status === 200){
        console.log('got the data');
        var jsonString = request.responseText;
        var countries = JSON.parse(jsonString);
        var ul = document.getElementById('country-list')


    dropdown.onchange = function() {
        nationChanger();
      }
      var nationChanger =  function(){        
        for (country of countries){
          if (country.name === dropdown.value){
            localStorage.setItem('nation', JSON.stringify(country))
          var info = "Country: " + country.name + "     " +
                        "Population: " + country.population + "     " +
                        "Capital: " + country.capital
          p.innerText = info
        var center = { lat: country.latlng[0], lng:  country.latlng[1]}
        var marker = "2"
        var map = new Map(center, 6)
        // map.addMarker(center, marker)
        map.addInfoWindow(center, info)
        }  
      }
    }

  

      for (var country of countries){ 
      var option = document.createElement('option')
      option.innerText = country.name
      dropdown.appendChild(option);
        }
      
       

      form.appendChild(dropdown) 
      ul.appendChild(form)
    }
  }
  request.send(null);
}

  // var map = function(nation){
  // var center = { lat: nation.latlng[0], lng:  nation.latlng[1]}
  // var marker = "2"
  // var map = new Map(center, 6)
  // }

  // var addMarker = function(){
  //   var center = { lat: nation.latlng[0], lng:  nation.latlng[1]}
  //   var marker = "2";
  // }





var style = function(){
  document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/ColoredBlankMap-World-10E.svg/3100px-ColoredBlankMap-World-10E.svg.png')"
  document.body.style.backgroundSize = "100%"
}



