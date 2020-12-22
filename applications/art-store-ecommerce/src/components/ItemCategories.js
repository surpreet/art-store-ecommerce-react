import React from "react";

import { ItemsContext } from "./ItemsProvider";

export default function ItemCategories() {
  const { itemCategories, handleSelectCategory } = React.useContext(
    ItemsContext
  );

  return (
    <ul className="item-categories">
      {itemCategories.map((category, i) => {
        return (
          <li key={i}>
            <button onClick={() => handleSelectCategory(category)}>
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
