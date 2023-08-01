import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import icon from './constants';

// import OrderForm from './OrderForm';

const GISlocation = () => {
  const [technician, setTechnicians] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
      };
      const response = await axios.get('http://localhost:9093/api/Teacher/getAll',{headers});
      const formattedTechnicians = response.data.map(technician => {
        const [longitude, latitude] = technician.location
          .replace('SRID=4326;POINT (', '')
          .replace(')', '')
          .split(' ');
        return {
          ...technician,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          position: [parseFloat(longitude), parseFloat(latitude)]
        }
      });
      console.log(response.data)
      setTechnicians(formattedTechnicians);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='row '>
        <div className='col-md-10 d-flex justify-content-center'>
          <span
            style={{
              position: 'absolute',
              top: '80px',
              zIndex: 1000,
              fontSize: '20px',
            }}
          >Select a Technician to work with based on their location: </span>
        </div>
        {/* <div className='col-md-2 d-flex justify-content-end'>
          <Button onClick={hendleBack}>Go Back</Button>
        </div> */}
      </div>
      <MapContainer center={[-6.163, 39.198]} zoom={10} style={{ height: '700px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © OpenStreetMap contributors"
        />
        {technician.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={icon}>
            <Popup>
              <div className='cellWithImg'>
                <img className='cellImg' src={marker.techUser.photo} alt="img_error" />
                hellow, i'm {marker.techUser.first_name} . <br />
                I live in {marker.techUser.address},<br />
                the service I provide is {marker.service.service_name},<br />
                I am here to help you. <br />
              </div><br />
              {/* <OrderForm tech_id={marker.id} /> */}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GISlocation;
