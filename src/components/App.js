import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);

  const handleSearch = (searchQuery) => {
    setListings(listings.filter((listing) => listing.description.includes(searchQuery)));
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
