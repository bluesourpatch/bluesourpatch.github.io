/* global L jQuery */

var damagewindMap = L.map('map3').setView([41, -75], 7)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(damagewindMap)
var damagingWinds = 'https://opendata.arcgis.com/datasets/b227d5d7ef874e388ab944b77d54975f_1.geojson'
jQuery.getJSON(damagingWinds, function (data) {
  var damageWindStyle = function (feature) {
    var windMonth = feature.mo
    var windColor = 'olive' // let the initial color be a darker green
    if (windMonth < 5 & windMonth > 7) { windColor = 'green' } // highlighting non-summer months
    return {
      color: 'blue',
      fillColor: windColor,
      weight: 1,
      fillOpacity: 0.4
    }
  }
  var eachMonthFn = function (feature, layer) {
    var stateName = feature.st
    var month = feature.mo
    layer.bindPopUp(stateName + ' experiences damaging wind speeds of >100 knots in: <br>' + month)
  }
  var colorObject = {
    style: damageWindStyle,
    onEachFeature: eachMonthFn
  }
  //  L.geoJSON(data, colorObject).addTo(damagewindMap)
  L.geoJSON(data, eachMonthFn).addTo(damagewindMap)
})
