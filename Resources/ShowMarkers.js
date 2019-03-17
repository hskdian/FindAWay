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
var waterBox = document.querySelector("#Water"); // select the check box
waterBox.addEventListener('click', function () {
    console.log("waterBox is clicked!");
    if (waterBox.checked) {
        showMarkers(listMarkers, "WaterFountain");
    } else {
        hideMarkers(listMarkers, "WaterFountain");
    }
});

var washRoomBox = document.querySelector("#Washroom");
washRoomBox.addEventListener('click', function () {
    console.log("washRoomBox is clicked!");
    if (washRoomBox.checked) {
        showMarkers(listMarkers, "PublicWashroom");
    } else {
        hideMarkers(listMarkers, "PublicWashroom");
    }
});

var ERBox = document.querySelector("#Clinic");
ERBox.addEventListener('click', function () {
    console.log("ERBox is clicked!");
    if (ERBox.checked) {
        showMarkers(listMarkers, "InjectionSite");
    } else {
        hideMarkers(listMarkers, "InjectionSite");
    }
});

var shelterBox = document.querySelector("#Shelter");
shelterBox.addEventListener('click', function () {
    console.log("shelterBox is clicked!");
    if (shelterBox.checked) {
        showMarkers(listMarkers, "Shelter");
    } else {
        hideMarkers(listMarkers, "Shelter");
    }
});
