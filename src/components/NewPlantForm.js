import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {

    //local sate to manage form inputs
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    //handle form submission totally
    const handleSubmit = (e)=> {
        e.preventDefault();

        //create new plant object 
        const newPlant = {
            name,
            image,
            price: parseFloat(price),
            soldOut: false
        
        };

        //pass the new plant to App.js
        onAddPlant(newPlant);

        //reset the form fields
        setName('');
        setImage('');
        setPrice('');
    };

    //render this forms
    return (
        <form className="new-plant-form" onSubmit={handleSubmit}>
            <h2>Add New Plant</h2>

            
            <input 
                type="text" 
                placeholder="Plant Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />

            
            <input 
                type="text" 
                placeholder="Image URL" 
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
            />
            
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                step="0.01"
                min="0"
                required
            />
            <button type="submit">Add Plant</button>
        </form>
    );
}
export default NewPlantForm;