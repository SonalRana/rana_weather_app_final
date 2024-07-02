import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '482944e26d320a80bd5e4f23b3de7d1f';

function CitySearch({ onCitySelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.weatherbit.io/api/meta`, {
        params: {
          key: API_KEY,
          city: searchTerm
        }
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching city data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a city"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map(city => (
          <div key={city.id} onClick={() => onCitySelect(city)}>
            {city.city_name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitySearch;
