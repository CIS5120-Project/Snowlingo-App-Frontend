import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveMap = ({ lat, lon }) => {
    return (
        <MapContainer center={[lat, lon]} zoom={10} scrollWheelZoom={false} style={{ height: '115px', width: '210px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <Marker position={[lat, lon]}>
                <Popup>
                    You are here!
                </Popup>
            </Marker> */}
            <Circle
                center={[lat, lon]}
                fillColor="blue"
                radius={500}  // radius in meters
            />
        </MapContainer>
    );
};

export default InteractiveMap;
