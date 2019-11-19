import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { render } from 'react-dom';

import Hello from './Hello';
import Child from './child'
import Child2 from './child2'
import Users from './users';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      test:'testing '
    };  
  }
  changeTest=()=>{
      this.setState({
      test:'testing 2'
    })
  }

  changeDynamic=(eve)=>{
    this.setState({
      test:eve.target.value
    })

  }


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        {this.state.test}
         <br/>
        <hr/>

        <Users></Users>
        <p>
          LINK SECTION BELOW
        </p>

        

        <Link to="/child"> Child &nbsp;&nbsp;</Link>
     
        <Link to="/child2" > Child2 &nbsp;&nbsp;</Link>
    
        <Link to="/hello"> Hello  &nbsp;&nbsp;</Link>
         <Link to="/users"> Users    </Link>
        <p>
        <hr/>
         ROUTE SECTION BELOW
        </p>

        <Route path='/hello' exact strict  component={Hello}></Route>
        <Route path='/child' exact strict  component={Child}></Route>
 
        <Route path='/child2' exact strict  render={()=>{return(<Child2 test={this.state.test} changeValue={this.changeTest} changeDynamic={this.changeDynamic.bind(this)}></Child2>)}}></Route>
        <Route path='/users' exact strict  component={Users}></Route>
         
        
      </div>
    );
  }

  



}


