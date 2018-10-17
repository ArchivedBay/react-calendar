import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import UIView from './pages/UIView'
import MonthView from './pages/MonthView'
import DayView from './pages/DayView'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }

  //this will update state before rendering, then since the state is different, the render gets updated again.
  //componentDidMount(){}


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path={'/'} component={UIView}/>
            <Route exact path={'/months/:selectedMonth'} component={MonthView}/>
            <Route expact path={`/months/:selectedMonth/:selectedDay`} component={DayView} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
