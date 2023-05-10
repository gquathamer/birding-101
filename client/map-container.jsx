import { React, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ebirdRecentObservationsURL = new URL(
      'https://api.ebird.org/v2/data/obs/US-CO-059/recent',
    );

    fetch(ebirdRecentObservationsURL, {
      headers: {
        'x-ebirdapitoken': 'i6k4lfj8nhr9',
      },
    })
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <MapContainer
      center={[39.67988240776321, -105.07969112565975]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((obs, idx) => {
        return (
          <Marker key={idx} position={[obs.lat, obs.lng]}>
            <Popup>
              {`${obs.howMany} ${obs.comName} spotted at ${obs.locName}`}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
