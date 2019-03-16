parseTheJson();

function parseTheJson () {
  $.getJSON("Resources/dataset.json", function(arr) {
    // console.log(arr);
    var ListLocations = [];
    for (var i = 0; i < arr.length; i++) {
      ListLocations.push(new Entry(arr[i]));
    }
    console.log(ListLocations);
    return ListLocations
  });
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