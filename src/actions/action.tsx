import Todo from 'src/model/Todo';
import TodoList from '../model/TodoList';
import TODO_ACTION_TYPES from "./actionTypes";


export function addNewTask(Task:TodoList) {
    console.log("tfgyjhtjtd");
    return ({
        payload:Task,  
        type:TODO_ACTION_TYPES.AddNewTask,
    });
}

export function addNewTodo(todo:Todo) {
    return ({
        payload:todo,  
        type:TODO_ACTION_TYPES.AddNewTodo,
    });
}

