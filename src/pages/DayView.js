import React, { Component } from 'react';
import CalendarData from '../data/toDo.json';
import './DayView.css';

class DayView extends Component {

  getDataFromDay = () => {
    let monthNum = parseInt( (this.props.match.params.selectedMonth) );
    let dayNum = parseInt( (this.props.match.params.selectedDay) );

    
    for(let month in CalendarData[0]){
      if(CalendarData[0][month] === monthNum){
        
        return(
          <ul> {this.renderTasks(CalendarData[0].Days[dayNum-1])} </ul>
        );
      }
    }

  }

  renderTasks = (dayObj) => {
    return dayObj.tasks.map((task, index) => {
      return <li key={index}> {task} </li>;
    });
  }


  render(){
    return (
      <div id="taskList">
        <h1>{this.getDataFromDay()}</h1>   
      </div>
    )
  }


}

export default DayView;




// return CalendarData[0].Days.map( (day) => {
  // return (
    // <div>
      // <h3>{day.DayNum}</h3>
      // <ul>
        // {day.tasks.map( (task) => <li>{task}</li>)}
      // </ul>
    // </div>                                    
  // );
// })