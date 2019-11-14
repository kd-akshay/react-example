import React,{Component} from 'react';

export default class Child2 extends Component{
  render(props){
    return(
      <>
       <input value={this.props.test} onChange={this.props.changeDynamic}/>
        <h3>Hi</h3>
        <button onClick={this.props.changeValue}> change props value </button>
      </>
    )

  }

}