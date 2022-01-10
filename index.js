const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544'
const $container = document.querySelector('.container');

let map = L.map('map').setView([0,0],1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors',
    id: 'mapbox/streets-v11',
    }).addTo(map);


const myIcon = L.icon({
    iconUrl: `iss.png`,
    iconSize:[52,32],
    iconAnchor:[25,16]
})
const marker = L.marker([0,0],{icon:myIcon}).addTo(map);




const getData = () => {
    fetch(apiUrl)
    .then(response => {return response.json()})
    .then(body => {
        const {latitude, longitude} = body;
        $container.innerHTML = `
            <h1>Where is the ISS? </h1>
            <p>Latitude:${latitude}</p>
            <p>Longitude:${longitude}</p>
        `
        
        marker.setLatLng([latitude,longitude])
    })
}



setInterval(getData, 1000);




