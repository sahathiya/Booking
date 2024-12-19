// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// function MapView({ latitude, longitude }) {
//     return (
//         <div className="w-full h-96">
//             <MapContainer
//                 center={[latitude, longitude]}
//                 zoom={13}
//                 scrollWheelZoom={false}
//                 className="w-full h-full"
//             >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <Marker position={[latitude, longitude]}>
//                     <Popup>
//                         Location: {latitude}, {longitude}
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         </div>
//     );
// }

// export default MapView;
