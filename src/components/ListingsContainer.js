import React, {useState} from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({listings, listingDeleted, setListings}) {
  const defaultSubmit = {
    description: "",
    image: "",
    location: ""
  }

  const [newItem, setNewItem] = useState(defaultSubmit)

  const display = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} listingDeleted={listingDeleted} />
  })

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:6001/listings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: newItem.description,
        image: newItem.image,
        location: newItem.location
      })
    })

    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => {
      setListings(data)
      setNewItem(defaultSubmit)
    })
  }

  function searchBarOnChange(event) {
    const thingWeChange = event.target.name
    setNewItem((itemData) => ({...itemData, [thingWeChange]: event.target.value}))
  }



  return (
    <main>
      <ul className="cards">
        {display}
      </ul>
      <div>
        <h1>
          Add Listing
        </h1>
        <form className="searchbar" onSubmit={handleSubmit}>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="description"
            value={newItem.description}
            onChange={(e) => searchBarOnChange(e)}
          />
          <input
            type="text"
            id="image"
            name="image"
            placeholder="image url"
            value={newItem.image}
            onChange={(e) => searchBarOnChange(e)}
          />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="location"
            value={newItem.location}
            onChange={(e) => searchBarOnChange(e)}
          />
          <button type="submit">Add Listing</button>
      </form>
      </div>
      <p>
        < br />
        < br />
      </p>
    </main>
  );
}

export default ListingsContainer;
