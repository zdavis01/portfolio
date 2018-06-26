import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Layouts/About/About';
import Work from '../Layouts/Work/Work';
import Home from '../Layouts/Home/Home';
import Contact from '../Layouts/Contact/Contact';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>

      {/* <Route path='' component={Home}/> */}
      <Route path='/about' component={About}/>
      <Route path='/work' component={Work}/>
      <Route path='/contact' component={Contact}/>

    </Switch>
  </main>
)

export default Main;
