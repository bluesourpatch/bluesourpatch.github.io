/* global L jQuery */

var map3 = L.map('map3').setView([41, -96], 4)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map3)
var urlUSData = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(urlUSData, function (data) {
  var mapColor = function (feature) {
    var cropAcre = feature.properties.CROP_ACR12
    var cropColor = 'darkkhaki'
    if (cropAcre > 3000000) { cropColor = 'limegreen' }
    return {
      fillColor: cropColor,
      weight: 1,
      fillOpacity: 0.4,
      color: 'darkblue'
    }
  }
  var colorObject = {
    style: mapColor,
    onEachFeature: cropAcreFeat
  }
  L.geoJSON(data, colorObject).addTo(map3)
})
var cropAcreFeat = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var cropAcre = feature.properties.CROP_ACR12
  var area = feature.properties.SQMI
  layer.bindPopup(name + ' is ' + area + ' square miles, and has <br>' + cropAcre + ' acres of cropland')
}
