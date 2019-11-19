const initState={
  age:21
}

const Reducer=( state=initState, action)=>{
  const newState={...state} ;
  switch( action.type){
    case 'AGE_UP':newState.age++;
                  console.log('in reducer');
                  break;
    case 'AGE_DOWN':newState.age--;
                  break;

  }
 return  newState;
}

export default Reducer;