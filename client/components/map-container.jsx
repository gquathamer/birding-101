import { React } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PropTypes } from 'prop-types';

export default function Map({ observations }) {
  console.log(observations);

  return (
    <>
      <MapContainer
        center={[39.67988240776321, -105.07969112565975]}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {observations.length &&
          observations.map((obs, idx) => {
            return (
              <Marker key={idx} position={[obs.lat, obs.lng]}>
                <Popup>
                  {`${obs.howMany} ${obs.comName} spotted at ${obs.locName}`}
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </>
  );
}

Map.propTypes = {
  observations: PropTypes.array,
};
