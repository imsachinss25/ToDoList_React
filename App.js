import React, { useState } from 'react';
import ToDoList from './ToDoList';


const App=()=>{
  const [inputList, setInputList]=useState("");
  const [items, setItems]=useState([]);
  const listEvent=(event)=>{
    setInputList(event.target.value);

  };
  const add=()=>{ 
    if(inputList!==""){
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
  };
    setInputList("");
  };

  const deleteItems=(id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((arrEle,index)=>{
            return index!==id;
        })
      })
  };
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1> ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add an item" value={inputList} onChange={listEvent}></input>
        <button onClick={add}> + </button>
        <ol>
          { items.map((value,index)=>{
             return( <ToDoList
             key={index}
             id={index}
            text={value}
            onSelect={deleteItems}
            />);
          })}
        </ol>
      </div>
    </div>
    </>
  )
}
export default App;