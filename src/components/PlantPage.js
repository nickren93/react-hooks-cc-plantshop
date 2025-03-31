import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants, setPlants] = useState([]);
  //const [originalPlants, setOriginalPlants] = useState(plants);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch initial plants data from API
    fetch("http://localhost:6001/plants")
     .then((resp) => resp.json())
     .then((data) => {
        setPlants(data);
        //setOriginalPlants(data);
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
        //setOriginalPlants([...originalPlants, data])
      }
    )
  }

  /*
  function handleSearch(userInput) {
    if (userInput === "") {
      setPlants(originalPlants);
    }else{
      const filteredPlants = originalPlants.filter(plant => plant.name.toLowerCase().includes(userInput.toLowerCase()));
      setPlants(filteredPlants);
    }
  }
  */

  function handleSearch(userInput) {
    setSearch(userInput);
  }

  function handleUpdatePrice(id, newPrice) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price: newPrice })
    })
    .then(resp => resp.json())
    .then(
      data => {
        const updatedPlants = plants.map(plant => plant.id === id ? {...plant, price: data.price } : plant)
        setPlants(updatedPlants)
        //setOriginalPlants(updatedPlants)
      }
    )
  }

  function handleDelete(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      const updatedPlants = plants.filter(plant => plant.id!== id);
      setPlants(updatedPlants);
      //setOriginalPlants(updatedPlants);
    })
  }

  const displayedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search search = {search} onhandleSearch = { handleSearch }/>
      <PlantList plants={displayedPlants} onUpdatePrice={handleUpdatePrice} handleDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;
