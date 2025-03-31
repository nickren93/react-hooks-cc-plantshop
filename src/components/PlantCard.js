import React, { useState } from "react";

function PlantCard( { image, name, price, id, onUpdatePrice, handleDelete }) {
  const [inStock, setInStock] = useState(true);
  //const [newPrice, setNewPrice] = useState(undefined);

  const [shownPrice, setShownPrice] = useState(undefined);

  function handleClick() {
    setInStock(!inStock)
  }

  function onUpdatePlant(e) {
    e.preventDefault();
    // Update plant price in plants state here
    //setNewPrice(shownPrice);
    setShownPrice(shownPrice)
    onUpdatePrice(id, shownPrice);
  }

  function onHandleDelete(id) {
    // Delete plant from plants state here
    //...
    handleDelete(id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}

      <br/>
      <br/>
      
      <form onSubmit={onUpdatePlant}>
        <label htmlFor="new price">Update Plant's Price:</label>
        <input 
          type="number" name="new price" step="0.01" 
          placeholder="Enter New Price" 
          value={shownPrice}
          onChange={(e) => setShownPrice(e.target.value)}
        />
        <button type="submit">Update Price</button>
      </form>

      <br/>
      <button onClick={e => onHandleDelete(id)}>Delete Plant</button>

    </li>
  );
}

export default PlantCard;
