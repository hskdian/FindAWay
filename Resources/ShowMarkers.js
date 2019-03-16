function showMarkers(listMarkers, typeMarker) {
    for (i = 0; i < listMarkers.length; i ++) {
        if (listMarkers[i].AMENITY_TYPE === typeMarker) {
            listMarkers[i].setVisible(true);
        }
    }
}