/* global L */
/* global jQuery */
jQuery(document.links).filter(function () { return this.hostname !== window.location.hostname }).attr('target', '_blank')
function init () {
  const demoMap = L.map('map').setView([15, -61], 6)
  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(demoMap)
  var island1 = L.marker([13.097648, -59.615970]).addTo(demoMap)
  const island2 = L.marker([17.900000, -62.833332]).addTo(demoMap)
  const island4 = L.marker([13.160890, -61.229420]).addTo(demoMap)
  const island5 = L.marker([15.372481, -61.320810]).addTo(demoMap)
  island1.bindPopup('Barbados')
  island2.bindPopup('Saint Barthelemy')
  island4.bindPopup('Saint Vincent')
  island5.bindPopup('Dominica')
}
window.addEventListener('load', init)
