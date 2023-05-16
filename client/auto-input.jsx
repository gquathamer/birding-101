import { React, useState, useEffect } from 'react';

export default function AutoInput() {
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
            <p
              key={idx}
              onClick={() => setInputValue(speciesObj.PRIMARY_COM_NAME)}
            >
              {speciesObj.PRIMARY_COM_NAME}
            </p>
          );
        })}
      </div>
    </>
  );
}
