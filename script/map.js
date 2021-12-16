// custom icon for my own location
const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const pois = [{
        lat: 47.492,
        long: 19.0598,
        name: 'Bar One',
        desc: 'A fancy bar to chill and have some cocktails',
        open: 'Mon - Sun, 18:00 - 04:00',
        tel: '0123456789',
        link: 'http://www.google.com'
    },
    {
        lat: 47.4931,
        long: 19.0687,
        name: 'Restaurant One',
        desc: 'A fancy restaurant to chill and have some cocktails',
        open: 'Mon - Sun, 18:00 - 04:00',
        tel: '0123456789',
        link: 'http://www.google.com'
    },
    {
        lat: 47.5062,
        long: 19.0725,
        name: 'Krancc Bar',
        desc: 'A fancy bar to chill and have some cocktails',
        open: 'Mon - Sun, 18:00 - 04:00',
        tel: '0123456789',
        link: 'http://www.google.com'
    },
    {
        lat: 47.4826,
        long: 19.0509,
        name: 'Sicc Restaurant',
        desc: 'A fancy restaurant to chill and have some cocktails',
        open: 'Mon - Sun, 18:00 - 04:00',
        tel: '0123456789',
        link: 'http://www.google.com'
    }
]


// init leaflet
var map = L.map('map').setView([47.50143822387308, 19.057622980229777], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(map);

// first default POI
L.marker([47.50143822387308, 19.057622980229777]).addTo(map)
    .bindPopup(`
        <h2>I am in Budapest!</h2>
        <div style="font-size: 1rem">look, I made it work</div>`)
    .openPopup();

getLocation()

pois.forEach(poi => createMarker(poi))

function createMarker(poi) {
    L.marker([poi.lat, poi.long]).addTo(map)
        .bindPopup(`
        <div>
            <p><strong>Location Name:</strong></p>
            <p>${poi.name}</p>
            <p><strong>What do we offer?</strong></p>
            <p>${poi.desc}</p>
            <p><strong>Opening Hours:</strong></p>
            <p>${poi.open}</p>
            <p><strong>Call us:</strong></p>
            <p>${poi.tel}</p>
            <br/>
            <a href="${poi.link}">Visit Homepage</a>
            <br/>
            <a href="https://maps.google.com/?q=${poi.lat},${poi.long}">Navigate me</a>
        </div>`)
}

// Geolocation API:
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createMarker);
    } else {
        console.log('Geolocation is not supported by this browser.')
    }
}
  

function createMarker(position) {
    L.marker([position.coords.latitude, position.coords.longitude], {icon: greenIcon}).addTo(map)
        .bindPopup('You are here')
        // .openPopup();
}
