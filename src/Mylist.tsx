import * as React from 'react';
import './todo.css';

function MyList(props:any) {
  return (
     <div className="list"> 
        {props.tasks.map((task:any)=>
           <div key={task.getId()} className='mylist' onClick={()=>props.setCurrentTask(task)}>
           <i className='fa fa-list-ul icon'/>
           <div className={props.toggleSideMenu?'list-text':'list-text hide'}>{task.getName()}</div>
           </div>)
        }
     </div>
   )
}

export default MyList; 