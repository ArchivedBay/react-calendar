import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Day.css'

class Day extends Component {



  render(){
    
    return (
      <div className="dayBlock">
        <h3>
          <Link to={`/months/${this.props.month}/${this.props.dayNum}`}>
            {this.props.dayNum}
          </Link>
        </h3>
      </div>
    )
  }

}

export default Day;