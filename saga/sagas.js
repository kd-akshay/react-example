import {takeEvery} from 'redux-saga/effects';


function* doSomething(){
 yield console.log('caught');

}


export function* ageWatcher(){
  
 yield takeEvery('AGE_UP',doSomething);

 

}


 //default ageWatcher;