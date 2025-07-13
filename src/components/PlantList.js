import React from 'react';

//plantList receives props from App.js
function PlantList({plants, onToggleSoldOut, onDeletePlant, onEditPlantPrice}) {
    const handleEditPrice = (id) => {
        const price = prompt("Enter new price:", "");
        if (price !== null && !isNaN(price) && price.trim() !== "") {
            onEditPlantPrice(id, parseFloat(price));
        } else {
            alert("Please enter a valid price.");
        }
    };

    return(
        <div className="plant-list">
            {plants.map(plant => (
                <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} 
                    className="plant-image" />
                    <h2>{plant.name}</h2>
                    <p>price: ${plant.price}</p>

                    <p>{plant.soldOut ? "Sold Out" : "Available"}</p>
                    <button onClick={() => onToggleSoldOut(plant.id)}>
                        {plant.soldOut ? "Mark as Available" : "Mark as Sold Out"}
                        </button>

                        <button onClick={() => onDeletePlant(plant.id)}
                            className="delete-button">
                            Delete</button>
                        <button onClick={() => handleEditPrice(plant.id)}
                            className="edit-price-button">
                            Edit Price</button>

                </div>
            ))}
        </div>
    );
}
export default PlantList;