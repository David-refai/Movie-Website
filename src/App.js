import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import data from '../Backend/data';



import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Movies from './components/pages/Movies';
import MovieData from './components/pages/MovieData';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Covid from './components/pages/Covid';
import News from './components/pages/News';


function App() {
  return (
    
    <Router>
      
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/movie/:id' component={MovieData}/>
        
        
        <Route path='/services' component={Services} />
        <Route path='/Movies' component={Movies} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/news' component={News} />
        <Route path='/covid' component={Covid} />
      </Switch>
    </Router>
 
    
  );
}

export default App;
