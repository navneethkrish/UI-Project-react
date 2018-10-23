import * as React from 'react';
import TodoList from './model/TodoList';
import MyList from './Mylist';
import NewList from './NewList'
import './todo.css';

class SideNav extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.addNewTask=this.addNewTask.bind(this);
        this.setCurrentTask=this.setCurrentTask.bind(this);
        this.toggleSideMenu=this.toggleSideMenu.bind(this);
        this.toggleText=this.toggleText.bind(this);
        this.state={
          toggleMenu:true,
          toggletext:true,
        }
    }

    public toggleText():void {
      setTimeout(()=>{
          this.setState({
          toggletext:true,
          });
    },300);

    }

    public setCurrentTask(Task:TodoList):void {
        this.props.setCurrentTask(Task);
    }

    public addNewTask():void {
       console.log("Inside Nav add New"); 
       this.props.addNewTask();
    }
    
    public toggleSideMenu() {
        this.props.toggleSideMenu();
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
  
    public render(): React.ReactNode {
        const list=(this.props.store!==undefined)?<MyList tasks={this.props.store} setCurrentTask={this.setCurrentTask} toggleSideMenu={this.state.toggleMenu}/>:null;
        console.log("in side Nav.....");        
        return (
            <div className={(this.state.toggleMenu?"side-navbar":"side-navbar wid-3")}>
            <br/>
            <div className="side-menu"> 
                <div className="side-logo" onClick={()=>this.toggleSideMenu()}>
                <i className="fa fa-bars icon" aria-hidden="true"/>
                </div>
            </div>
            <br/>
            <br/>
            <div className="side-menu">
                <div className="side-logo">
                <i className="fa fa-sun-o icon" aria-hidden="true"/>
                </div>
                <div className={(this.state.toggleMenu?"side-menu-text":"side-menu-text hide")}>
                My&nbsp;Day
                </div>
            </div>
            <div className="side-menu">
                <div className="side-logo">
                <i className="fa fa-star-o icon" aria-hidden="true"/>
                </div>
                <div className={(this.state.toggleMenu?"side-menu-text":"side-menu-text hide")}>
                 Important
                </div>
            </div>
            <div className="side-menu">
                <div className="side-logo">
                <i className="fa fa-calendar icon" aria-hidden="true"/>
                </div>
                <div className={(this.state.toggleMenu?"side-menu-text":"side-menu-text hide")}>
                Planned
                </div>
            </div>
            <div className="side-menu">
                <div className="side-logo">
                <i className="fa fa-home icon" aria-hidden="true"/>
                </div>
                <div className={(this.state.toggleMenu?"side-menu-text":"side-menu-text hide")}>
                 Tasks
                </div>
            </div>
            <br/>
            <br/>
            {list}
            <NewList addNewTask={this.addNewTask} toggleSideMenu={this.state.toggleMenu} />
        </div>   
        );
    }
}
export default SideNav;
  