import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
// import L from 'leaflet';
import icon from "./constants";
import { Button } from 'rsuite';


const GISlocation = () => {
  const markerLocations = [
    { id: 1, position: [-6.1352373119125785, 39.25387776464775], streetAddress: 'Street 1' },
    { id: 2, position: [-6.168604089664149, 39.43349247609658], streetAddress: 'Street 2' },
    { id: 3, position: [-6.306134623534267, 39.27870534490551], streetAddress: 'Street 3' },
    { id: 4, position: [-6.005836283404984, 39.201911068182945], streetAddress: 'Street 4' },
    { id: 5, position: [-5.814062099770871, 39.22494078900032], streetAddress: 'Street 5' },
    { id: 6, position: [-5.7299059526462965, 39.29274577118103], streetAddress: 'Street 6' }

  ];

  // Custom icon definition
 

  return (
    <div>
    
      <MapContainer center={[-6.163, 39.198]} zoom={10} style={{ height: '580px',width:'100%' }}>
      <span
        style={{
          position: "absolute",
          top: "10px",
          left: "50px",
          zIndex: 1000,
          color:"red",
          padding: "5px",
          fontSize: "20px",
          backgroundColor:"lightblue"
        }}
      >
       Select a Teacher From Your Location
      </span>
        <span style={{ index: '3' }}>Select a Teacher From Your Location</span>
        <TileLayer
        
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © OpenStreetMap contributors"
        />

        {markerLocations.map(marker => (
          <Marker key={marker.id} position={marker.position} icon={icon}>
            <Popup>
              You are here. <br />
              Street: {marker.streetAddress} <br />
              Latitude: {marker.position[0]} <br />
              Longitude: {marker.position[1]}<br />
              <Button>Make Order</Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GISlocation;
// end oflocation