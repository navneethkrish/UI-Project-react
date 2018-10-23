import * as React from 'react';
import './todo.css';
class TopNav extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <nav>
            <div className="todo">
                 To-Do
            </div>
            <div className="search-box">
                <i className="fa fa-search search-icon" aria-hidden="true"/>
                <input className="search" placeholder=" Search" type="text"/>
            </div>
            </nav>
        );
    }
    
}
export default TopNav;
  
