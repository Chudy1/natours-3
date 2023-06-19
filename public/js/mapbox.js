/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    // 'pk.eyJ1IjoiY2h1ZHl5IiwiYSI6ImNsaTM1bjMxNDB4dHUzam80NjY0Y3ExOGoifQ.5P3EU5iXuQmaLhz6YscASw';
    'pk.eyJ1IjoiY2h1ZHl5IiwiYSI6ImNsaTM0c3JtNzBzcDYzdmxweTI3dXBuOGIifQ.3cMHyxsqucctd-njDXFm4g';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    scrollZoom: false,
    // center: [-118.7420829, 34.0206066],
    zoom: 4,
    // style: 'mapbox://styles/chudyy/cli37jtop02ln01pgan4l21bc',
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add Popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    // Extend bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
