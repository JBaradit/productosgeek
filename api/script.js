function iniciarMapa() {
    var coord = { lat: -33.0441425, lng: -71.3770601 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    })
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}