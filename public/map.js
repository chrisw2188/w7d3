var Map = function(latLng, zoom){

  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zoom
  });
  this.resetCenter = function(latLng){
    this.googleMap.setCenter(latLng);
  }
 
 this.addInfoWindow = function(latLng, title){
     var marker = this.addMarker(latLng, title)
     marker.addListener('click', function(){
       var infoWindow = new google.maps.InfoWindow({
         content: title
       })
       infoWindow.open(this.map, marker)
     })
   };

this.addMarker = function( latLng , title) {
    var marker = new google.maps.Marker( {
    position: latLng,
    map: this.googleMap,
    title: title
    })
    return marker
  };
} 