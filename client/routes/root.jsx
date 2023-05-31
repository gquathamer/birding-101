import { React, useState } from 'react';
import Map from '../components/map-container';
import SpeciesForm from '../components/form';
import Navigation from '../components/navigation';
import LocationForm from '../components/location-form';

export default function Root() {
  const [observations, setObservations] = useState([]);

  return (
    <>
      <Navigation></Navigation>
      <SpeciesForm setObservations={setObservations}></SpeciesForm>
      <LocationForm></LocationForm>
      <Map observations={observations}></Map>
    </>
  );
}
