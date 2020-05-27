import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./header/header.jsx";
import GitHubAPi from "./githubApi/github-api.jsx";
import About from "./about/about.jsx";
import MenuList from "./layout/menuList";



function App() {

  return <>
    <div className="row">
      <div className="col-lg-12">
        <Header data={
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/myGitHub" component={GitHubAPi} />
          </Switch>
        }
          list={<MenuList />}
        />
        <div>
        </div>
      </div>
    </div>
  </>;
}

export default App;
