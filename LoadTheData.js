parseTheJson(readJsonFile())

async function readJsonFile() {
  $.getJSON("Resources/dataset.json", function(json) {
      //console.log(json); // this will show the info it in firebug console
      return json;
  });
}

function parseTheJson (jsString) {
  // console.log(parsedDataJson)
  // var json = await readJsonFile()
  var json = '{"Fountain location:Aberdeen Park": [{"ADDRESS": "plaza","LATITUDE": 49.234947000370624,"LONGITUDE": -123.02725400017576,"AMENITY_TYPE": "WaterFountain","PHONE_NUMBER": null,"ENVIRONMENT": "Outdoor","COUNTER": ""}],"null": [{"ADDRESS": "1025 Boundary Road","LATITUDE": 49.2758809678,"LONGITUDE": -123.0240719603,"AMENITY_TYPE": "PublicWashroom","PHONE_NUMBER": null,"ENVIRONMENT": "Outdoor","COUNTER": 0},{"ADDRESS": "89 Expo Boulevard","LATITUDE": 49.2778209665,"LONGITUDE": -123.1035990223,"AMENITY_TYPE": "PublicWashroom","PHONE_NUMBER": null,"ENVIRONMENT": "Outdoor","COUNTER": 0}]}',
    obj = JSON.parse(json);
  var temp = obj["Fountain location:Aberdeen Park"]
  var JsonKeys = Object.keys(obj)

  var ListLocations = []
  for (i = 0; i < JsonKeys.length; i++) {
    if (JsonKeys[i] != "null") {
      ListLocations.push(new Entry(JsonKeys[i], obj[JsonKeys[i]][0]))
    } 
  }
  console.log(ListLocations)
  return ListLocations
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

// "null": [{"ADDRESS": "1025 Boundary Road","LATITUDE": 49.2758809678,"LONGITUDE": -123.0240719603,"AMENITY_TYPE": "PublicWashroom","PHONE_NUMBER": null,"ENVIRONMENT": "Outdoor","COUNTER": 0},{"ADDRESS": "89 Expo Boulevard","LATITUDE": 49.2778209665,"LONGITUDE": -123.1035990223,"AMENITY_TYPE": "PublicWashroom","PHONE_NUMBER": null,"ENVIRONMENT": "Outdoor","COUNTER": 0}]}
// '{"Fountain location:Aberdeen Park": [{"ADDRESS": "plaza",LATITUDE": 49.234947000370624,"LONGITUDE": -123.02725400017576,"AMENITY_TYPE": "WaterFountain","PHONE_NUMBER": null,"ENVIRONMENT": "Outdoor","COUNTER": ""}]',