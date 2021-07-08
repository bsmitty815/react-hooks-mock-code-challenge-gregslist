import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const DATA = "http://localhost:6001/listings"


function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  

  useEffect(() => {

    fetch(DATA)
    .then(response => response.json())
    .then(data => setListings(data))

  }, [])


  function listingDeleted(id) {
    const updatedListingsArray = listings.filter((listing) => {
      return listing.id !== id //filtering through to take out the id that does not
                              //equal that id passed through as the argument that was deleted
                              //and return the other listings
    })
    setListings(updatedListingsArray)
  }

  function searchPlant(termBeingSearched) {
    setSearchTerm(termBeingSearched)
  }

  const displayListings = listings.filter(listing => {
    return listing.description.includes(searchTerm.toLowerCase())
  })



  return (
    <div className="app">
      <Header searchPlant={searchPlant} searchTerm={searchTerm} />
      <ListingsContainer listings={displayListings} listingDeleted={listingDeleted} setListings={setListings}/>
    </div>
  );
}

export default App;

/*
{
    "id": 1,
    "description": "heater",
    "image": "./images/heater.jpg",
    "location": "BROOKLYN"
    },
    {
      "id": 2,
      "description": "2019 Toyota Tacoma grill",
      "image": "./images/toyota-grill.jpg",
      "location": "Williamsburg"
    },
    {
      "id": 3,
      "description": "Free Braun 3735 Electric Toothbrush charger",
      "image": "./images/toothbrush-charger.jpg",
      "location": "Williamsburg"
    },
    {
      "id": 4,
      "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
      "image": "./images/dvd-cases.jpg",
      "location": "Prospect Heights"
    },
    {
      "id": 5,
      "description": "wood",
      "image": "./images/wood.jpg",
      "location": "Greenpoint"
    },
    {
      "id": 6,
      "description": "Beautiful couch",
      "image": "./images/couch.jpg",
      "location": "Bay Ridge"
    },
    {
      "id": 7,
      "description": "Treadmill Parts For Free",
      "image": "./images/treadmill.jpg",
      "location": "East Flatbush"
    }
*/