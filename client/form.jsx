import { React } from 'react';
import AutoInput from './auto-input';
import PropType from 'prop-types';

export default function SpeciesForm({ setObservations }) {
  function handleSubmit(e) {
    e.preventDefault();
    const ebirdRecentObservationsURL = new URL(
      `https://api.ebird.org/v2/data/obs/US-CO-059/recent/cangoo`,
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
      <AutoInput id="speciesInput"></AutoInput>
      <button type="submit">Submit</button>
    </form>
  );
}

SpeciesForm.propTypes = {
  setObservations: PropType.func,
};
