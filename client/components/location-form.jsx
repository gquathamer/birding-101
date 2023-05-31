import { React, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const LocationForm = () => {
  const [stateArray, setStateArray] = useState([]);
  // const [ countyArray, setCountyArray ] = useState([]);
  const [state, setState] = useState('');
  // const [ county, setCounty ] = useState('');

  useEffect(() => {
    fetch('https://api.ebird.org/v2/ref/region/list/subnational1/US', {
      headers: {
        'x-ebirdapitoken': 'i6k4lfj8nhr9',
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setStateArray(response);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('');
  }, [state]);

  function handleChange(e) {
    setState(e.target.value);
  }

  return (
    <Form>
      <Form.Group>
        <Form.Select onChange={e => handleChange(e)}>
          <option>{state || `Please select a state`}</option>
          {stateArray.map((state, idx) => {
            return (
              <option value={state.name} key={idx}>
                {state.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default LocationForm;
