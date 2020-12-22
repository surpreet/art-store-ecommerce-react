import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserProvider";
import logo from './mergeHeader.png';
export default function Header(props) {
  const { user, handleSignOut } = useContext(UserContext);

  return (
    <>
      <header className="page-header">
        <Link to="/">
          <h1>Yalda Art Gallery</h1>
          
          
        </Link>
      

      <ul className="user">
        {!user ? (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/AboutUs">About us</Link>
            </li>
          </>
        ) : (
          <>
            <li>{user.email}</li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign out</button>
            </li>
          </>
        )}
      </ul>
      <p><img src={logo} alt="Example3" width="100%" height="170" /> </p>
    </header>
    </>
  );
}
