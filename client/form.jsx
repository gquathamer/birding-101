import { React, useState } from 'react';
import AutoInput from './auto-input';
import PropType from 'prop-types';

export default function SpeciesForm({ setObservations }) {
  const [speciesObj, setSpeciesObj] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const ebirdRecentObservationsURL = new URL(
      `https://api.ebird.org/v2/data/obs/US-CO-059/recent/${speciesObj.SPECIES_CODE}`,
    );

    fetch(ebirdRecentObservationsURL, {
      headers: {
        'x-ebirdapitoken': 'i6k4lfj8nhr9',
      },
    })
      .then(response => response.json())
      .then(response => {
        setObservations(response);
      })
      .catch(err => console.error(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="speciesInput">Species :</label>
      <AutoInput id="speciesInput" setSpeciesObj={setSpeciesObj}></AutoInput>
      <button type="submit">Submit</button>
    </form>
  );
}

SpeciesForm.propTypes = {
  setObservations: PropType.func,
};
