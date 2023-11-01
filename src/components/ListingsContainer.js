import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings} ) {
  const handleDeleteListing = (listingId) => {
    fetch(`http://localhost:6001/listings/${listingId}`, {
      method: 'DELETE',
    })
      .then(() => {})
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id} 
            listing={listing} 
            onDeleteListing={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
