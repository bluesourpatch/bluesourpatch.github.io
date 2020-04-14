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
coastPoly.bindPopup('In this highlighted area you can find Mount Gay Distillery and the house Rhianna grew up in')
bridgetownMark.bindPopup('Saint Michael Parish.')

// More specific coords if allowed by map:
// [13.113, -59.627],
//  [13.114, -59.627],
//  [13.108, -59.621],
//  [13.106, -59.625]
