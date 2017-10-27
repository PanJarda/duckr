import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  MainContainer,
  HomeContainer,
  AuthenticateContainer,
  FeedContainer
} from "../containers";

const routes = (
  <BrowserRouter>
    <MainContainer>
      <Switch>
        <Route exact={true} path="/" component={HomeContainer} />
        <Route path="/auth" component={AuthenticateContainer} />
        <Route path="/feed" component={FeedContainer} />
      </Switch>
    </MainContainer>
  </BrowserRouter>
);

export default routes;
