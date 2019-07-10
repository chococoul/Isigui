import React from 'react';

import {Switch, Route} from 'react-router-dom'
import './App.css';
import Productlist from './components/Productlist'
import Navbar from './components/Navbar'
import Card from './components/Cart'
import Details from './components/Details'
import Default from './components/Default'
import Modal from './components/Modal'
// import "boostrap/dist/css/boostrap.min.css";
function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Switch>
     <Route exact path='/' component={Productlist} />
     <Route path='/details' component={Details}/>
     <Route path='/card' component={Card}/>
     <Route  component={Default}/>
    </Switch>
   <Modal/>
    
    </React.Fragment>
  );
}

export default App;
