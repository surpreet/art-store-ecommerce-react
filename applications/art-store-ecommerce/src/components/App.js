import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Details from "./Details";
import UserCartItemsList from "./UserCartItemsList";

export default function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/items" component={Items}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/AboutUs" component={AboutUs}></Route>
        <Route path="/cart" component={UserCartItemsList}></Route>
        <Route path="/Details" component={Details}></Route>
        <Redirect to="/items" />
      </Switch>

      <Footer />
    </div>
  );
}
