import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ addCity }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCity = {
      name,
      country,
      population,
    };

    addCity(newCity);

    navigate('/cities');
  };

  return (
    <div className="card">
      <h2>Add City</h2>

      <form onSubmit={handleSubmit} className="city-form">
        <div className="form-group">
          <label htmlFor="name">City Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="population">Population</label>
          <input
            id="population"
            type="number"
            value={population}
            onChange={(event) => setPopulation(event.target.value)}
            required
          />
        </div>

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;