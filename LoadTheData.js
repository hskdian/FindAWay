window.onload = function() {
  var startPos;
  var geoOptions = {
    enableHighAccuracy: true
  }

  var geoSuccess = function(position) {
    startPos = position;
    // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    // document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    console.log("current location "+ startPos.coords.latitude+ startPos.coords.longitude)
    var marker = new google.maps.Marker({
      // position: {lat: startPos.coords.latitude, lng: startPos.coords.longitude},
      position: {lat: 49.2812675, lng: -123.0954008},
      map: map,
      icon: "Resources/pointersmall.png",
      title: 'Current Location'
    });
  };
  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };
  var mapLocale = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    console.log("current location "+ startPos.coords.latitude+ startPos.coords.longitude)
    var marker = new google.maps.Marker({
      position: {lat: startPos.coords.latitude, lng: startPos.coords.longitude},
      map: map,
      title: 'Current Location'
    });
  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};

function parseTheJson (markers) {
  $.getJSON("Resources/dataset.json", function(arr) {
    // console.log(arr);

    for (var i = 0; i < arr.length; i++) {
      ListLocations.push(new Entry(arr[i]));
    }
    return ListLocations
  }).done(function() {
    console.log( "We done!" );
    for (var i = 0; i < ListLocations.length; i++) {
      var image;
      var location = ListLocations[i];
      switch(location.AMENITY_TYPE) {
        case "WaterFountain":
          image = 'Resources/watericon.png';
          console.log(image.url);
          break;
        case "PublicWashroom":
        // code block
          image = 'Resources/washroomicon.png';
          break;
        case "InjectionSite":
          // code block
          image = 'Resources/emergencyicon.png';
          break;
        case "Shelter":
          // code block
          image = 'Resources/sheltericon.png';
          break;
        default:
        // code block
      }
      var marker = new google.maps.Marker({
        position: {lat: parseFloat(location.LATITUDE), lng: parseFloat(location.LONGITUDE)},
        map: map,
        icon: image,
        title: "marker"+i,
        AMENITY_TYPE: location.AMENITY_TYPE
      });
      markers.push(marker);
    }
  });
}

function setMarkers(map,locations){
  console.log("hi set marker");
  console.log(locations.length);
  for (var i = 0; i < ListLocations.length; i++) {
    console.log(i);
    var location = ListLocations[i];
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(location.LATITUDE), lng: parseFloat(location.LONGITUDE)},
    });
  }
}

function Entry (obj) {
  this.NAME = obj.NAME;
  this.ADDRESS = obj.ADDRESS;
  this.LATITUDE = obj.LATITUDE ;
  this.LONGITUDE = obj.LONGITUDE ;
  this.AMENITY_TYPE = obj.AMENITY_TYPE ;
  this.PHONE_NUMBER = obj.PHONE_NUMBER ;
  this.ENVIRONMENT = obj.ENVIRONMENT ;
  this.COUNTER = obj.COUNTER;
}
