import React, { useState, useEffect } from 'react';
import './index.css';

//import components
import NewPlantForm from './components/NewPlantForm';
import PlantList from './components/PlantList';
import Search from './components/Search';

//API base URL
const API_BASE_URL = 'http://localhost:6001/plants';

function App() {
  //state to search all plants fetched from backend 
  const [plants, setPlants] = useState([]);

  //state foe search term 
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the API
  useEffect(() => {
    fetch(API_BASE_URL)
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  // Add a new plant 
  const addPlant = (newPlant) => {
    fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(addedPlant => setPlants([...plants, addedPlant]))
      .catch(error => console.error('Error adding plant:', error));
  };

  //Toggle sold out status
  const toggleSoldOut = (id) => {
    const plantToUpdate = plants.find(plant => plant.id === id);
    const updatedPlant = { ...plantToUpdate, soldOut: !plantToUpdate.soldOut };

    fetch(`${API_BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ soldOut: updatedPlant.soldOut }),
    })
      .then(response => response.json())
      .then(updatedPlantFromServer => {
        setPlants(plants.map(plant => (plant.id === id ? updatedPlantFromServer : plant)));
      })
      .catch(error => console.error('Error updating plant:', error));
  };

  //Add edit a plant price
  const editPlantPrice = (id, newPrice) => {
    const plantToUpdate = plants.find(plant => plant.id === id);
    const updatedPlant = { ...plantToUpdate, price: parseFloat(newPrice) };

    fetch(`${API_BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: updatedPlant.price }),
    })
      .then(response => response.json())
      .then(updatedPlantFromServer => {
        setPlants(plants.map(plant => (plant.id === id ? updatedPlantFromServer : plant)));
      })
      .catch(error => console.error('Error updating plant price:', error));
  };
  //Delete a plant
  const deletePlant = (id) => {
    fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPlants(plants.filter(plant => plant.id !== id));
      })
      .catch(error => console.error('Error deleting plant:', error));
  };
  // Filter plants based on search term
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div className="App">
      <h1>Plantsy</h1>
      <NewPlantForm onAddPlant={addPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList
        plants={filteredPlants}
        onToggleSoldOut={toggleSoldOut}
        onDeletePlant={deletePlant}
        onEditPlantPrice={editPlantPrice}
        />


    </div>
  );

}
export default App;

