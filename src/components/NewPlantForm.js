import React, { useState } from "react";

function NewPlantForm( { handleSubmit }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0,
  })

  function onHandleSubmit(e) {
    e.preventDefault();
    // Add new plant to plants state here
    handleSubmit(newPlant);
    //setNewPlant({ name: "", image: "", price: 0 });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onHandleSubmit}>
        <input 
          type="text" name="name" 
          placeholder="Plant name" 
          value={newPlant.name}
          onChange={(e) => setNewPlant({...newPlant, name: e.target.value })}
        />
        <input 
          type="text" name="image" 
          placeholder="Image URL" 
          value={newPlant.image}
          onChange={(e) => setNewPlant({...newPlant, image: e.target.value })}
        />
        <input 
          type="number" name="price" step="0.01" 
          placeholder="Price" 
          value={newPlant.price}
          onChange={(e) => setNewPlant({...newPlant, price: e.target.value })}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
