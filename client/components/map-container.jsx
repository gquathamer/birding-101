import { React } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PropTypes } from 'prop-types';
import { L } from 'leaflet';

export default function Map({ observations }) {
  let bounds;
  observations.length > 0
    ? (bounds = L.latLngBounds(
        observations.map(coord => [coord.lat, coord.lng]),
      ))
    : (bounds = L.latLngBounds(
        L.latLng(39.37052088851672, -105.6426156179245),
        L.latLng(40.01445119362242, -104.66481653795064),
      ));

  return (
    <>
      <MapContainer bounds={bounds} zoom={8} scrollWheelZoom={true}>
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
