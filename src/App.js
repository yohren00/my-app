import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./header/index";
import GitHubAPi from "./githubApi/index";
import About from "./about/index";
import MenuList from "./layout/menuList.js";



function App() {

  return <>
    <div className="row">
      <div className="col-lg-12">
        <Home data={
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
