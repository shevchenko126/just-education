import React, { useState } from "react";

import "./index.css";

export default function FavouriteButton() {
  const [favorite, setFavorite] = useState(false);

  function handleIconClick() {
    setFavorite((tog) => !tog);
  }

  return (
    <button className="save" onClick={handleIconClick}>
      {favorite ? (
        <img src="/images/icons/saved.svg" title="Saved" alt="Saved" />
      ) : (
        <img src="/images/icons/save.svg" title="Save" alt="Save" />
      )}
    </button>
  );
}
