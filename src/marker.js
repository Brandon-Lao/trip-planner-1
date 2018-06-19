const mapboxgl = require('mapbox-gl');

const iconURLs = {
   Activity: `http://i.imgur.com/WbMOfMl.png`,
   Hotel: `http://i.imgur.com/D9574Cu.png`,
   Restaurant: `http://i.imgur.com/cqR6pUI.png`
};

// const buildMarker = (markerType, markerCoods) => 	{
// 	document.createElement(markerType);
// 	markerType.style.width = "32px";
// 	markerType.style.height = "32px";
// 	let urlStr = '';
// 	if (iconURLs[markerType]){
// 		urlStr = iconURLs[markerType];
// 	}
// 	else {
// 		urlStr = iconURLs[iconURLs.Activity];
// 	}
// 	markerType.style.backgroundImage = urlStr;
// 	// new mapboxgl.Marker(markerType.setLngLat(markerCoods)).addTo(index.map);
// };

//new mapboxgl.Marker(mapMarker).setLngLat([-74.009151, 40.705086]).addTo(map);
// Activity: http://i.imgur.com/WbMOfMl.png
// Hotel: http://i.imgur.com/D9574Cu.png
// Restaurant: http://i.imgur.com/cqR6pUI.png


module.exports = (markerType, markerCoods) => {
	const marker = document.createElement('div');
	marker.style.width = "32px";
	marker.style.height = "32px";
	let urlStr = '';
	if (iconURLs[markerType]){
		urlStr = 'url(' + iconURLs[markerType] + ')';
	}
	else {
		urlStr = iconURLs.Activity;
	}
	marker.style.backgroundImage = urlStr;
	const returnThing = new mapboxgl.Marker(marker).setLngLat(markerCoods);
	console.log(returnThing);
	return returnThing;
	// new mapboxgl.Marker(markerType.setLngLat(markerCoods)).addTo(index.map);
};
