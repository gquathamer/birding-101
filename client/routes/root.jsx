import { React, useState } from 'react';
import Map from '../components/map-container';
import Navigation from '../components/navigation';
import LocationForm from '../components/location-form';

export default function Root() {
  const [observations, setObservations] = useState([]);

  return (
    <>
      <Navigation></Navigation>
      <LocationForm setObservations={setObservations}></LocationForm>
      <Map observations={observations}></Map>
    </>
  );
}
