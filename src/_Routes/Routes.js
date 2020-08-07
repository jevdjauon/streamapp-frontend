import React from "react";
import { Switch, Route } from "react-router-dom";
import PageOne from "../Pages/PageOne";
import HeroesList from "../components/HeroesList";
import EditHeroes from "../components/EditHeroes";
import CreateHero from "../components/CreateHero";
import CreateUser from "../components/CreateUser";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PageOne} />
      {/* <Route path="/options" component={pagetwo} /> */}
      <Route path="/heroes" exact component={HeroesList} />
      <Route path="/edit/:id" exact component={EditHeroes} />
      <Route path="/create" exact component={CreateHero} />
      <Route path="/user" exact component={CreateUser} />
    </Switch>
  );
};

export default Routes;
