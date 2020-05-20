import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./header/index";
import GitHubAPi from "./githubApi/index";



function App() {

  return <>
    <div className="row">
      <div className="col-lg-12">
        <Home data={<div className="col col-lg main-content">
          <Switch>
            <Route exact path="/myGitHub" component={GitHubAPi} />
          </Switch>
        </div>} />

        <div>

        </div>
      </div>
    </div>
  </>;
}

export default App;
