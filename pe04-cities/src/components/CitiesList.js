import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function CitiesList({ cities, deleteCity }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteCity(id);
    navigate('/cities');
  };

  return (
    <div className="card">
      <h2>Cities List</h2>

      {cities.length === 0 ? (
        <p>No cities have been added yet.</p>
      ) : (
        <ul className="city-list">
          {cities.map((city) => (
            <li key={city.id}>
              <Link to={`/cities/${city.id}`}>
                {city.name}
              </Link>

              <button
                className="delete-button"
                onClick={() => handleDelete(city.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </div>
  );
}

export default CitiesList;