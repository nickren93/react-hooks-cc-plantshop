import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants, setPlants] = useState([]);
  const [originalPlants, setOriginalPlants] = useState(plants);

  useEffect(() => {
    // Fetch initial plants data from API
    fetch("http://localhost:6001/plants")
     .then((resp) => resp.json())
     .then((data) => {
        setPlants(data);
        setOriginalPlants(data);
      })
     .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  function handleSubmit(newPlant){
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    }).then(resp => resp.json())
    .then(
      data => {
        setPlants([...plants, data])
        setOriginalPlants([...originalPlants, data])
      }
    )
  }

  function handleSearch(userInput) {
    if (userInput === "") {
      setPlants(originalPlants);
    }else{
      const filteredPlants = originalPlants.filter(plant => plant.name.toLowerCase().includes(userInput.toLowerCase()));
      setPlants(filteredPlants);
    }
  }

  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search handleSearch = { handleSearch }/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
