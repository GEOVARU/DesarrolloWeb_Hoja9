import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './Inicio';
import ListaDatos from './ListaDatos';
import DetallesDato from './DetallesDato';
import AcercaDe from './AcercaDe';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/lista" component={ListaDatos} />
          <Route path="/detalle/:id" component={DetallesDato} />
          <Route path="/acerca-de" component={AcercaDe} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
