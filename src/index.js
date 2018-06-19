const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoiYm9ybmFya3VuIiwiYSI6ImNqaW00bWU3ZTAwYmYzdm8yanJkYjZwYzEifQ.4Pnqjq2bk9Ct_tPYRauXeA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const mapMarker = document.createElement("mapMarker");
// mapMarker.style.width = "32px";
// mapMarker.style.height = "32px";
// mapMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// let marker1 = new mapboxgl.Marker(mapMarker).setLngLat([-74.009151, 40.705086]);
// marker1.addTo(map);
// console.log(marker1);

const marker3 = buildMarker('Hotel', [-74.009151, 40.705086]);
console.log(marker3);
marker3.addTo(map);
