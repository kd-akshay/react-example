import React,{Component} from 'react';
import {connect} from 'react-redux';

class Child extends Component{
  render(){
    return(
      <>
      
        REDUX COMPONENT USE
        <p>AGE: {this.props.age}</p>
        <button onClick={this.props.onAgeUp}>AGE UP</button> &nbsp;
        <button onClick={this.props.onAgeDown}>AGE DOWN</button>

      </>
    )

  }
}


const mapStateToProps=(state)=>{
    return{
      age:state.age
    }
  }
const mapDispatchToProps=(dispach)=>{
    return{
      onAgeUp:()=>dispach({type:'AGE_UP'}),
      onAgeDown:()=>dispach({type:'AGE_DOWN'})
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Child);