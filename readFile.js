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