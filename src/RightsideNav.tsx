import * as React from 'react';
import './todo.css';

 class  RightSideNav extends React.Component<any, {note:string, dateFlag:any}> {
    constructor(props:any) {
        super(props);
        this.state = { 
          dateFlag:true,  
          note:"",  
        };
        this.showDatePicker=this.showDatePicker.bind(this);
        this.addDueDate=this.addDueDate.bind(this)
    }
 
    public showDatePicker() {
        this.setState({
            dateFlag:false,
        })
    }

    public addDueDate():any{
        this.setState({
            dateFlag:true,
        })
    }

    public render() {
        console.log("In .....ri.."+this.state.dateFlag); 
    return (

        <div className="right-sidenav">
        <div className="right-sidenav-content">
          <div className="todo-content">
             <i className={this.props.currentTodo.getIsChecked()?"fa fa-check-circle todo-content-icon":"fa fa-circle-thin todo-content-icon"} 
             onClick={()=>this.props.makeChecked(this.props.currentTodo)}/>
             <div className={this.props.currentTodo.getIsChecked()?"todo-content-text line-through":"todo-content-text"}>{this.props.currentTodo.getText()}</div>
             <i className={this.props.currentTodo.getIsImportant()?"fa fa-star todo-star-icon":"fa fa-star-o todo-star-icon"} 
             onClick={()=>this.props.makeImportant(this.props.currentTodo)}/>
           </div>
         </div>
        <div className="right-sidenav-content">
           <div className="add-to-day">
             <div className="addtoday-logo">
             <i className="fa fa-sun-o" aria-hidden="true"/>
             </div>
             <div className="addtoday-text">
             Add to My Day
             </div>
            </div>
        </div>
        <div className="right-sidenav-content">
          <div className="right-menubar">
             <div className="rightmenu">
               <div className="rightmenu-logo">
               <i className="fa fa-clock-o" aria-hidden="true"/>
               </div>
               <div className="rightmenu-text">
               Remind Me
               </div>
             </div>
             <div className="rightmenu">
               <div className="rightmenu-logo">
              <i className="fa fa-calendar icon" aria-hidden="true"/>
               </div>

               <input className={(this.state.dateFlag?"rightmenu-text addDue":"rightmenu-text addDue hide")} 
               type="text" placeholder="Add Due Date" readOnly={true}  value={this.props.currentTodo.getDueDate()} onClick={this.showDatePicker}/>

               <input className={((this.state.dateFlag)
               ?"date-Picker":"date-Picker show-inline-block")} type="date" onChange={()=>this.addDueDate()} onBlur={(e)=>this.props.addDueDate(e)}/>
             </div>
             <div className="rightmenu">
               <div className="rightmenu-logo">
               <i className="fa  fa-repeat" aria-hidden="true"/>
               </div>
               <div className="rightmenu-text">
               Repeat
               </div>
             </div>
          </div>
        </div>
        <div className="right-sidenav-content">
           <div className="add-note">
             <input className="add-note-text" placeholder="Add Note.." value={this.props.currentTodo.getNote()}  
             onChange={(e)=>this.props.addNewNote(e)}/>
           </div>
        </div>
        <div className="right-bottom-navbar">
          <div className="switch-icon">
            <i className="fa fa-caret-square-o-left fa-rotate-180" aria-hidden="true" onClick={this.props.closeRightSideMenu}/>
          </div>
          <div className="create-Today">
             Created Today...
          </div>
          <div className="delete-icon" onClick={this.props.deleteTodo}>
          <i className="fa fa-trash" aria-hidden="true"/>
          </div>
        </div>
       </div>
      
        );
    }
}
export default RightSideNav;