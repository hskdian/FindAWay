function readJsonFile() {
    $.getJSON("Resources/dataset.json", function(json) {
        console.log(json); // this will show the info it in firebug console
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


var obj = {
        "NAME": "Fountain location:Aberdeen Park",
        "ADDRESS": "plaza",
        "LATITUDE": 49.234947000370624,
        "LONGITUDE": -123.02725400017576,
        "AMENITY_TYPE": "WaterFountain",
        "PHONE_NUMBER": null,
        "ENVIRONMENT": "Outdoor",
        "COUNTER": 0
    };

var result = new Entry (obj);