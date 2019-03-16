function showMarkers(listMarkers, typeMarker) {
    for (i = 0; i < listMarkers.length; i ++) {
        if (listMarkers[i].AMENITY_TYPE === typeMarker) {
            listMarkers[i].setVisible(true);
        }
    }
}

function hideMarkers(amenityType, markerArr) {
    for (var i = 0; i < markerArr.length; i++) {
        var marker = markerArr[i];
        if (marker.AMENITY_TYPE === amenityType) {
            marker.setVisible(false); // maps API hide call
        }
    }
}