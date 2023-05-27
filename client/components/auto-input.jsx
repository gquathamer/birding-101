import { React, useState, useEffect } from 'react';
import PropType from 'prop-types';

export default function AutoInput({ setSpeciesObj }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestedSpecies, setSuggestedSpecies] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
    setShowSuggestions(false);
  }

  function handleBlur(e) {
    if (!e.relatedTarget) {
      setShowSuggestions(false);
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={e => handleBlur(e)}
        value={inputValue}
      ></input>
      {showSuggestions && (
        <div tabIndex="-1" id="suggestions">
          {suggestedSpecies.map((speciesObj, idx) => {
            return (
              <p key={idx} onClick={() => handleClick(speciesObj)}>
                {speciesObj.PRIMARY_COM_NAME}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}

AutoInput.propTypes = {
  setSpeciesObj: PropType.func,
};
