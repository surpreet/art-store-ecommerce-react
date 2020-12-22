import React , {useContext} from "react";
import { useItems } from "./ItemsProvider";
import { UserContext } from "./UserProvider";
import Details from "./Details";
import { Switch, Route, Link } from "react-router-dom";

export default function ItemsList(props) {
  const { items } = useItems();
  const {  handleAddToCartClick } = useContext(UserContext);
  //const {  handleViewDetailsClick } = useContext(UserContext);

  /*<button className="item" onClick={() => handleViewDetailsClick(item)}>
    Details
  </button>*/
  /*
  <switch>
  <Route path="/AboutUs" component={AboutUs}></Route>
  </switch>
  */ 
  return (
    <div className="artmain">
    
    <ul className="items-list">
      {items.map((item) => (
        <li key={item.name}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <div>${item.price}</div>
          <p>{item.description}</p>
          <button className="item" onClick={() => handleAddToCartClick(item)}>
            Add to Cart
          </button>
          <li>
              <Link to="/Details">Details</Link>
          </li>
          <switch>
            <Route path="/Details" component={Details}></Route>
          </switch>
          
          

        </li>
      ))}
    </ul>
    </div>
  
  );
}
