/* global L */
var barbMap = L.map('barbadosMap').setView([13.14, -59.5], 12)
L.tileLayer('https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png').addTo(barbMap)
var bridgetownMark = L.marker([13.115, -59.5999]).addTo(barbMap)
var coastPoly = L.polygon([
  [13.107129, -59.625079],
  [13.113534, -59.626926],
  [13.113952, -59.625061],
  [13.108599, -59.621867]
]).addTo(barbMap)
var holeTown = new L.LatLng(13.187930, -59.637829)
var bridgeTown = new L.LatLng(13.096851, -59.614483)
var townLine = [holeTown, bridgeTown]

var polyLine = new L.Polyline(townLine, {
  color: 'purple',
  weight: 3,
  opacity: 0.5,
  smoothFactor: 1
})
polyLine.addTo(barbMap)
coastPoly.bindPopup('In this highlighted area you can find Mount Gay Distillery and the house Rihanna grew up in')
bridgetownMark.bindPopup('Saint Michael Parish.')
polyLine.bindPopup('This line connects two of the most popular areas to visit in Barbados')
