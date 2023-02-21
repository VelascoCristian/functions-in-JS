const d = document,
 n = navigator;

export default function getGeolocation(id) {
    const $div = d.getElementById(id),
     options = {
        enableHighAccuracy: true,
        timeOut: 4500,
        maximumAge: 0
     };

    const success = (position) => {
        let coords = position.coords;

        $div.innerHTML = `
        <p> Your actual position is: </p>
        <ul>
            <li> Latitude: <b> ${coords.latitude} </b> </li>
            <li> Longitude: <b> ${coords.longitude} </b> </li>
            <li> Precision: <b> ${coords.accuracy} </b> meters. </li>
        </ul>
        <a href="https://www.google.com.ar/maps/@${coords.latitude}, ${coords.longitude},15z" target="_blank" rel="noopener">See in Google Maps</a>
        `;
    }

    const error = (err) => {
        $div.innerHTML = `<p><mark> Error ${err.code}: ${err.message} </mark> </p>`
    }

    n.geolocation.getCurrentPosition(success, error, options);

}