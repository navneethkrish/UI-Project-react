// import TodoList from 'src/model/TodoList';
import TodoActionTypes from '../actions/actionTypes';

const initialState:any = { 
  tasks:[],
};

function todoApp(state:any=initialState , action:any){
    switch (action.type) {
       case TodoActionTypes.AddNewTask:
       console.log(state);
       return {
        ...state,
        tasks:initialState.tasks.push(action.payload),
       }
    default:
       return state;
    }
}

export default todoApp;