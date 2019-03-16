function showMarkers(listMarkers, typeMarker) {
    for (i = 0; i < listMarkers.length; i ++) {
        if (listMarkers[i].AMENITY_TYPE === typeMarker) {
            listMarkers[i].setVisible(true);
        }
    }
}

function hideMarkers(listMarkers, typeMarker) {
    for (var i = 0; i < listMarkers.length; i++) {
        var marker = listMarkers[i];
        if (marker.AMENITY_TYPE === typeMarker) {
            marker.setVisible(false);
        }
    }
}

var listMarkers = []; // stub, replace with real collection of all markers
var waterBox = document.querySelector(); // select the check box
waterBox.addEventListender('click', function () {
    if (waterBox.checked) {
        showMarkers(listMarkers, "WaterFountain");
    } else {
        hideMarkers(listMarkers, "WaterFountain");
    }
});

var washRoomBox = document.querySelector();
washRoomBox.addEventListender('click', function () {
    if (washRoomBox.checked) {
        showMarkers(listMarkers, "PublicWashroom");
    } else {
        hideMarkers(listMarkers, "PublicWashroom");
    }
});

var ERBox = document.querySelector();
ERBox.addEventListender('click', function () {
    if (ERBox.checked) {
        showMarkers(listMarkers, "InjectionSite");
    } else {
        hideMarkers(listMarkers, "InjectionSite");
    }
});

var shelterBox = document.querySelector();
shelterBox.addEventListender('click', function () {
    if (shelterBox.checked) {
        showMarkers(listMarkers, "Shelter");
    } else {
        hideMarkers(listMarkers, "Shelter");
    }
});
