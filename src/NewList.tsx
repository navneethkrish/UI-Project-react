import * as React from 'react';
import './todo.css';

class NewList extends React.Component<{addNewTask: () => void, toggleSideMenu:boolean},{}>{
    constructor(props:any) { 
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div className={this.props.toggleSideMenu?"add-new-list":"add-new-list hide"} onClick={()=>this.props.addNewTask()}>
                <div className="add-logo">
                <i className="fa fa-plus icon selected" aria-hidden="true"/>
                </div>
                <div className="add-new-text selected">
                New&nbsp;List
                </div>
            </div>
        );
    }
}

export default NewList; 