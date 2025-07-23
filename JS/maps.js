// Configuración del mapa y ubicaciones de las tiendas
const stores = [
    {
        name: 'Tienda Central',
        lat: 40.4168, // Ejemplo: Madrid
        lng: -3.7038,
        address: 'Calle Principal, 123',
        phone: '+34 912 345 678'
    },
    // Añadir más tiendas aquí
];

// Función para inicializar el mapa
function initMap() {
    // Esta función será llamada por la API de Google Maps
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: stores[0].lat, lng: stores[0].lng }
    });

    // Añadir marcadores para cada tienda
    stores.forEach(store => {
        const marker = new google.maps.Marker({
            position: { lat: store.lat, lng: store.lng },
            map: map,
            title: store.name
        });

        // Añadir información de la tienda
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="store-info">
                    <h3>${store.name}</h3>
                    <p>${store.address}</p>
                    <p>Tel: ${store.phone}</p>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });

    // Renderizar lista de tiendas
    renderStoreList();
}

// Función para mostrar la lista de tiendas
function renderStoreList() {
    const storeList = document.querySelector('.store-list');
    if (!storeList) return;

    storeList.innerHTML = stores.map(store => `
        <div class="store-item">
            <h3>${store.name}</h3>
            <p>${store.address}</p>
            <p>Tel: ${store.phone}</p>
        </div>
    `).join('');
}

// Coordenadas de la tienda
const STORE_LOCATION = {
    lat: 38.25234567890123,
    lng: -0.7012345678901234
};

// Función para inicializar el mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: STORE_LOCATION,
        zoom: 15
    });

    // Añadir marcador
    const marker = new google.maps.Marker({
        position: STORE_LOCATION,
        map: map,
        title: 'Pirotecnia Elx'
    });

    // Añadir ventana de información
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div class="map-info-window">
                <h3>Pirotecnia Elx</h3>
                <p>Crta. del León, Km 0,6</p>
                <p>03293 Elche, Alicante</p>
            </div>
        `
    });

    // Mostrar información al hacer clic en el marcador
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}