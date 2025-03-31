import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, onUpdatePrice, handleDelete }) {

  const plantsCards = plants.map((plant) => {
    return <PlantCard key={plant.id} image={plant.image} name={plant.name} 
    price={plant.price} id={plant.id} onUpdatePrice={onUpdatePrice} handleDelete={handleDelete}/>;
  })

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantsCards}
    </ul>
  );
}

export default PlantList;
