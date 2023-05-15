import { React, useState } from 'react';
import Map from './map-container.jsx';
import SpeciesForm from './form.jsx';

export default function App() {
  const [observations, setObservations] = useState([]);

  return (
    <>
      <SpeciesForm setObservations={setObservations}></SpeciesForm>
      <Map observations={observations}></Map>
    </>
  );
}
