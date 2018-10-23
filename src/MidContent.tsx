import * as React from 'react';
import Todo from './model/Todo';
import './todo.css';


class MidContent extends  React.Component<any,{flag:boolean,todoContent:any}> {
    private id:number;
    constructor(props:any) {
        super(props);
        this.id=0;
        this.state = {
           flag:false,
           todoContent:"",
        }
        this.showAddTodoButton=this.showAddTodoButton.bind(this);
        this.addNewTodo=this.addNewTodo.bind(this);
        this.showRightSideNav=this.showRightSideNav.bind(this);
    }

    public showAddTodoButton():any {
        this.setState(
            {
             flag:(this.state.flag)?false:true,
            },()=>{console.log("trigger....."+this.state.flag);}
        ); 
    }
    
    public getTaskName(e:any):any { 
        this.props.setCurrentTaskName(e.target.value);
        console.log(e.target.value);
    }
    
    public getTodoContent(e:any):any {
        console.log(e.target.value);
        this.setState({
            todoContent:e.target.value,
        })
    }
    
    public addNewTodo():any {
        console.log(this.state.todoContent);
        this.props.addNewTodo(this.state.todoContent,this.id++);
        this.setState({
            flag:false,
            todoContent:""
        })
    } 

    public showRightSideNav(todo:Todo):any {
        this.props.setCurrentTodo(todo);
    }
     
    public makeChecked() {
        //   
    }

    public makeImportant() {
       //
    }  

    public render() {
        console.log("in midContent....");
        console.log(this.props.currentTask);
        const width=this.props.toggleMenu?(this.props.currentTodo!=null?"mid-content wid-72":"mid-content wid-96"):this.props.currentTodo!=null?"mid-content wid-54":"mid-content wid-79";
      return ( 
        <div className={width}>
            <div className="menubar">
                <input className="my-list-name" placeholder="untitled" onChange={(e)=>this.getTaskName(e)} value={this.props.currentTask.getName()}/>
                <i className="fa fa-ellipsis-h menu-list-icon" aria-hidden="true"/>
                <div className="sort">
                    <i className="fa fa-exchange fa-rotate-90" aria-hidden="true" onClick={()=>this.props.sort()}/>&ensp;Sort
                     &ensp;&ensp;<i className="fa fa-trash deleteTask" style={{color:"red"}} onClick={this.props.deleteTask} 
                     aria-hidden="true"/>
                </div>
            </div>
            <div className="todo-list">
            <div className="list">
                    {    
                    this.props.currentTask.getListOfToDo().map((todo:Todo)=>
                    { return (
                    <div key={todo.getId()} className="write-todo" onClick={()=>this.showRightSideNav(todo)}>
                    <i className={todo.getIsChecked()?"fa fa-check-circle todo-completed":"fa fa-circle-thin todo-completed"} onClick={()=>this.props.makeChecked(todo)}/>
                    <div className={todo.getIsChecked()?"todo-text line-through":"todo-text"}>{todo.getText()}</div>
                    <i className={todo.getIsImportant()?"fa fa-star todo-important":"fa fa-star-o todo-important"} onClick={()=>this.props.makeImportant(todo)}/>
                    </div>
                    )})}
            </div>
            <div className="add-more">
            <i className= {(this.state.flag ? "fa fa-plus add-icon hide" : "fa fa-plus add-icon")} aria-hidden="true"/>
            <i className={(this.state.flag? "fa fa-circle-thin todo-complete show-inline-block" :"fa fa-circle-thin todo-complete" )}aria-hidden="true"/>
            <input className="add-more-text" placeholder="Add More" value={this.state.todoContent} onChange={(e)=>this.getTodoContent(e)} onClick={()=>this.showAddTodoButton()}/>
            <div className={(this.state.flag?"add-button show-inline-block":"add-button")} onClick={()=>this.addNewTodo()}>ADD</div>
            </div>
            </div>
        </div>);
    }
}
 
export default MidContent;