var map;
var maker;

function initMap() {
 // Create a map object and specify the DOM element for display.
  	console.log("Init Map");
	function placeMarker(location){	   
	   if ( marker ) {
		 marker.setPosition(location);
	   } else {
		 marker = new google.maps.Marker({
		   position: location,
		   map: map,
		   icon: image
		 });
	   }
	   latitude = location.lat();
	   longitude = location.lng();
	   map.setCenter(location);
	 }
	
	var mapCanvas = document.getElementById('map');
	var initLatlng = new google.maps.LatLng(-16.3891229,-71.5347932);
	
	var mapOptions = {
         center:  initLatlng,
         zoom: 15,
		 mapTypeControl: false,
		 navigationControlOptions: {
           style: google.maps.NavigationControlStyle.SMALL
         },
         disableDefaultUI: true,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	
	map = new google.maps.Map(mapCanvas, mapOptions);
	
 
}

     /* function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }*/
   

