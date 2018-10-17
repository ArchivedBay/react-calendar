import React, { Component } from 'react';
import moment from 'moment';
import Day from '../components/Day/Day'

class UIView extends Component {

  getDays = (year,month) => {
    //get the number of days in the given month, for the given year.
    const amt = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
    let dayHolder = [];

    //loop the amount of days, and add a Day to the array each time.
    for(let i = 1; i < amt+1; i++){
      let day = <Day month={month} key={i} dayNum={i} />
      dayHolder.push(day);
    }
  
    //console.log(dayHolder);
    
    return dayHolder.map( (day) => day );
  }

  render(){
    let month = moment().format('M'), // 10
        year = moment().format('Y'); // 2018

    return (
      <div id="calendar">
        <h2> {moment().format('MMMM')} </h2>
        <div className='dayBlockContainer'>{this.getDays(year, month)}</div>
      </div>
    )
  }
}

export default UIView;