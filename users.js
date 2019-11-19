import React, { Component } from "react";
import axios from "axios";

export default class Users extends Component {
  state = {
    persons: []
  };
  render() {
    return (
      <>
        <button onClick={()=>this.getData()}>get data</button>
        <br />
        {this.state.persons ? (
          this.state.persons.map(ele => {
            <div>{ele}</div>;
          })
        ) : (
          <h4>NA</h4>
        )}
      </>
    );
  }
  getData = () => {
    console.log("inside getData");
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      console.table(persons);
      this.setState({ persons });
    });
  };
}
