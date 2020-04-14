/* global L* /
var barbMap = L.map('barbadosMap').setView([17, -63], 1)
L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}').addTo(barbMap)
var bridgetownMark = L.marker([13.1, -59.5]).addTo(barbMap)
var coastPoly = L.polygon([
  [13.2, -59.7],
  [13, -59.7],
  [13.1, -59.4],
]).addTo(barbMap)
coastPoly.bindPopup('In this highlighted area you can find...')
bridgetownMark.bindPopup('Barbados.')

//More specific coords if allowed by map:
// [13.113, -59.627],
//  [13.114, -59.627],
//  [13.108, -59.621],
//  [13.106, -59.625]
