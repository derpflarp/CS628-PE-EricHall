import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';

import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities((previousCities) => [
      ...previousCities,
      {
        ...city,
        id: Date.now().toString(),
      },
    ]);
  };

  const deleteCity = (id) => {
    setCities((previousCities) =>
      previousCities.filter((city) => city.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>Cities Application</h1>

          <nav>
            <Link to="/cities">Cities List</Link>
            <Link to="/add-city">Add City</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/cities" replace />} />

            <Route
              path="/cities"
              element={
                <CitiesList
                  cities={cities}
                  deleteCity={deleteCity}
                />
              }
            >
              <Route
                path=":cityId"
                element={<CityDetails cities={cities} />}
              />
            </Route>

            <Route
              path="/add-city"
              element={<AddCity addCity={addCity} />}
            />

            <Route path="*" element={<Navigate to="/cities" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;