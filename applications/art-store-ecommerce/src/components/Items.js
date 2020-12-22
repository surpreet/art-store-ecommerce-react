import React from "react";

import ItemCategories from "./ItemCategories";
import ItemsList from "./ItemsList";

export default function Items() {
  return (
    <div className="main">
      <ItemCategories />
      <ItemsList />
      
    </div>
  );
}
