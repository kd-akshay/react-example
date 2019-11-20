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
  getData = async () => {
    console.log("inside getData");
    await axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      console.log(res);
      this.setState({ persons });
    });

    // let res= await axios.get("https://jsonplaceholder.typicode.com/comments");
    // if(res){
    //   console.log(res.data);

    //   var tst={...state}
    //   this.setState(tst)

      
    // }

    console.log("outside getData");
  };
}
