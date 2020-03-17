import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
/*
    BrowserRouter: Basicamente vai definir que estaremos utilizando as rotas por um browser.
    Switch: Vai definir que só será possivel chamar uma unica rota ao mesmo tempo.
    Route: Será onde iremos definir a nossa rota('path') e também definir qual o componente que irá ser exibido
*/

import Main from "./pages/main";
import Products from "./pages/products";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Products} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
