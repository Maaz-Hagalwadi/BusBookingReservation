// // import React from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import L from 'leaflet';

// // // Fix leaflet's default icon issue
// // delete L.Icon.Default.prototype._getIconUrl;
// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
// //   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // });

// // const BusMap = ({ buses }) => {
// //   return (
// //     <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px' }}>
// //       <TileLayer
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //       />
// //       {buses.map(bus => (
// //         <Marker key={bus.busId} position={[bus.latitude, bus.longitude]}>
// //           <Popup>
// //             <div>
// //               <h5>{bus.busName}</h5>
// //               <p>Location: {bus.latitude}, {bus.longitude}</p>
// //             </div>
// //           </Popup>
// //         </Marker>
// //       ))}
// //     </MapContainer>
// //   );
// // };

// // export default BusMap;


// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
 
// const MapPage = () => {
//   useEffect(() => {
//     // Initialize map
//     const map = L.map('map', {
//       center: [12.9716, 77.5946], // Bangalore coordinates
//       zoom: 12, // Initial zoom level
//     });
 

    
//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//       maxZoom: 18,
//     }).addTo(map);
 
//     // Cleanup function
//     return () => {
//       map.remove();
//     };
//   }, []);
 
//   return (
//     <div id="map" style={{ height: '100vh',width:'1200px' }}>
//       {/* Map container */}
//     </div>
//   );
// };
 
// export default MapPage;
 
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
const MapPage = ({ from, to }) => {
  useEffect(() => {
    // Initialize map
    const map = L.map('map', {
      center: [12.9716, 77.5946], // Default center, you can adjust this
      zoom: 7, // Adjust zoom level for better visibility of the route
    });
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);
    // Geocoding locations to get latitude and longitude
    const geocodeLocation = async (location) => {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
      const data = await response.json();
      if (data.length > 0) {
        return [data[0].lat, data[0].lon];
      }
      return null;
    };
    const addRoute = async () => {
      const fromCoords = await geocodeLocation(from);
      const toCoords = await geocodeLocation(to);
      if (fromCoords && toCoords) {
        L.Routing.control({
          waypoints: [
            L.latLng(fromCoords[0], fromCoords[1]),
            L.latLng(toCoords[0], toCoords[1]),
          ],
          routeWhileDragging: true,
        }).addTo(map);
      }
    };
    addRoute();
    // Cleanup function
    return () => {
      map.remove();
    };
  }, [from, to]);
  return (
    <div id="map" style={{ height: '50vh', width: '100%' }}>
    </div>
  );
};
export default MapPage;







