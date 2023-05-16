import { React, useState, useEffect } from 'react';
import PropType from 'prop-types';

export default function AutoInput({ setSpeciesObj }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestedSpecies, setSuggestedSpecies] = useState([]);

  useEffect(() => {
    if (inputValue.length < 4) {
      setSuggestedSpecies([]);
      return;
    }
    fetch('/api/species', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        species: inputValue,
      }),
    })
      .then(response => response.json())
      .then(response => setSuggestedSpecies(response))
      .catch(err => console.error(err));
  }, [inputValue]);

  function handleClick(speciesObj) {
    setInputValue(speciesObj.PRIMARY_COM_NAME);
    setSpeciesObj(speciesObj);
  }

  return (
    <>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
      <div id="suggestions">
        {suggestedSpecies.map((speciesObj, idx) => {
          return (
            <p key={idx} onClick={() => handleClick(speciesObj)}>
              {speciesObj.PRIMARY_COM_NAME}
            </p>
          );
        })}
      </div>
    </>
  );
}

AutoInput.propTypes = {
  setSpeciesObj: PropType.func,
};
