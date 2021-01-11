import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const ToDoList=(props)=>{
   
    return( 
    <>
    <div className="todo">
    <ClearIcon className="clearIcon" onClick={()=>{
        props.onSelect(props.id)
    }} />
    <li> {props.text} </li>
    </div>
    </>
    )

};
export default ToDoList;