import * as React from 'react';
import { connect } from "react-redux";
import {addNewTask} from './actions/action';
import MidContent from './MidContent'
import Todo from './model/Todo';
import TodoList from './model/TodoList';
import RightSideNav from './RightsideNav';
import SideNav from './SideNav';
import './todo.css';


class Content extends React.Component<any,{currentTask:any,currentTodo:any,store:any,toggleMenu:boolean}> {
    public id:number;
    constructor(props:any) {
        super(props);
        this.state = {
           currentTask:null,
           currentTodo:null,
           store:this.props.tasks,
           toggleMenu:false,
        }
        this.id=0;
        this.setCurrentTask=this.setCurrentTask.bind(this);
        this.setCurrentTodo=this.setCurrentTodo.bind(this);
        this.addNewTask=this.addNewTask.bind(this);
        this.setCurrentTaskName=this.setCurrentTaskName.bind(this);
        this.addNewTodo=this.addNewTodo.bind(this);
        this.makeChecked=this.makeChecked.bind(this);
        this.makeImportant=this.makeImportant.bind(this);
        this.addNewNote=this.addNewNote.bind(this);
        this.addDueDate=this.addDueDate.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.sort=this.sort.bind(this);
        this.toggleSideMenu=this.toggleSideMenu.bind(this);
        this.closeRightSideMenu=this.closeRightSideMenu.bind(this);
    }
   
    public toggleSideMenu() {
        if(this.state.toggleMenu){
            this.setState({
                toggleMenu:false,
            });
        } else {
            this.setState({
                toggleMenu:true,
            });
        }
    }



    public addNewTodo(todo:string,id:number) {
        const temp:TodoList=this.state.currentTask; 
        temp.getListOfToDo().push(new Todo(id,false,todo,"",false,""));
        this.setState({
             currentTask:temp,   
        })
    }

    public setCurrentTask(Task:TodoList) {
         console.log("In Coneeeeetent");
         this.setState({
             currentTask:Task,
         },()=>{
            console.log(this.state.currentTask);
         });
         this.setState({
            currentTodo:null,   
       })
        
    }

    public setCurrentTaskName(name:string):any {
        const temp:any=this.state.currentTask;
        temp.setName(name);
        this.setState({
             currentTask:temp,
        });
    }

    public setCurrentTodo(todo:Todo):any {
        this.setState({
           currentTodo:todo, 
        })
    }

    public addNewTask() {
       console.log("content...add new task");
       console.log(this.props.tasks);
       const task = new TodoList(++this.id, 'untitled('+this.id+')' ,[]);
       this.props.addNewTask(task); 

    }
   
    public makeChecked(todo:Todo):any {
       console.log(todo);
       if (todo.getIsChecked()) {
           todo.setIsChecked(false);
       } else {
           todo.setIsChecked(true); 
       }
       this.setState({
        currentTodo:todo,
       })
    }

    public makeImportant(todo:Todo):any {
        console.log(todo);
        if (todo.getIsImportant()) {
            todo.setIsImportant(false);
        } else {
            todo.setIsImportant(true); 
        }
        this.setState({
         currentTodo:todo,
        })
    }  

    public addNewNote(e:any):any {
       console.log(this.state.currentTodo);
       const todo=this.state.currentTodo;
       todo.setNote(e.target.value); 
       this.setState({
           currentTodo:todo,
       });
    }

    public addDueDate(e:any):any{
        console.log(this.state.currentTodo);
        const todo:Todo=this.state.currentTodo;
        todo.setDueDate(e.target.value); 
        this.setState({
            currentTodo:todo,
        });
    }
     
    public deleteTask(){
        const tempStore=this.state.store;
        const index:number = tempStore.indexOf(this.state.currentTask);
        console.log(index);
        tempStore.splice(index, 1);
        this.setState({
               currentTodo:null,
               store:tempStore
           },()=>{
             if(index===tempStore.length&&index!==0) {  
               this.setState({
                  currentTask:tempStore[index-1], 
               });
             } else {
               this.setState({
                  currentTask:tempStore[index], 
               });
             }
           });
    }
    
    public closeRightSideMenu(){
        this.setState({
            currentTodo:null,
        })
    }

    public deleteTodo(){
        const tempTask:TodoList=this.state.currentTask;
        const index:number = tempTask.getListOfToDo().indexOf(this.state.currentTodo);
        console.log(index);
        tempTask.getListOfToDo().splice(index, 1);
        this.setState({
              currentTask:tempTask,
              
        },()=>{
            if(index===tempTask.getListOfToDo.length&&index!==0) {  
                this.setState({
                   currentTodo:tempTask.getListOfToDo()[index-1], 
                });
              } else {
                this.setState({
                   currentTodo:tempTask.getListOfToDo()[index-1], 
                });
              }
        });
    }

    public sort(){
        const tempTask=this.state.currentTask;
          tempTask.getListOfToDo().sort((obj1:Todo, obj2:Todo)=> {
             return obj1.getText().localeCompare(obj2.getText());
        });
        this.setState({
            currentTask:tempTask ,
        });
    }

    public search() {
        //
    }

    public render() {
        console.log(this.state.store);
        const midContent=(this.state.currentTask!=null)?
        <MidContent 
        currentTask={this.state.currentTask} 
        setCurrentTaskName={this.setCurrentTaskName} 
        addNewTodo={this.addNewTodo} 
        setCurrentTodo={this.setCurrentTodo} 
        makeChecked={this.makeChecked}
        makeImportant={this.makeImportant}
        deleteTask={this.deleteTask}
        sort={this.sort}
        toggleMenu={this.state.toggleMenu}
        currentTodo={this.state.currentTodo}
        />:null;

        const rightSideNav=(this.state.currentTodo!=null)?
        <RightSideNav currentTodo={this.state.currentTodo}
        makeChecked={this.makeChecked}
        makeImportant={this.makeImportant}
        addNewNote={this.addNewNote}
        addDueDate={this.addDueDate}
        deleteTodo={this.deleteTodo}
        closeRightSideMenu={this.closeRightSideMenu}
      
        />:null;
        return (
            <div className="content">
            <SideNav store={this.state.store} 
            setCurrentTask={this.setCurrentTask} 
            addNewTask={this.addNewTask}
            toggleSideMenu={this.toggleSideMenu}
            />
            {midContent}
            {rightSideNav}
            </div>
        );
    }
    
}

function mapStateToProps(state:any){
    console.log(state.todo.tasks);
    return {
        tasks:state.todo.tasks,
    };
};

function mapDispatchToProps(dispatch:any) {
    return {
       addNewTask: (Task:any) => dispatch(addNewTask(Task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);

  