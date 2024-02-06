import React, {useState} from "react";

function Components() {
const [lists, setLists] = useState([]);
const [newLists, setNewLists] = useState("");

function handleInputList(event) {
  setNewLists(event.target.value)
}

function handleAddList() {
  if (newLists.trim() !== "") {
    setLists((prevLists) => [...prevLists, newLists]);
    setNewLists("");
  }
  
}

function handleRemoveList(index) {
  setLists(lists.filter((_, i) => i !== index));

  // const updateList = lists.filter((element, index) => i !== index);
  // setLists(updateList);
}

function handleMoveUpList(index){
  if (index > 0) {
    const updateList = [...lists];
    [updateList[index], updateList[index - 1]] = [updateList[index -1], updateList[index]];
    setLists(updateList);
  }
}

function handleMoveDownList(index){
  if (index < lists.length - 1) {
    const updateList = [...lists];
    [updateList[index + 1], updateList[index]] = [updateList[index], updateList[index + 1]];
    setLists(updateList);
  }
}

 return (<div className="listContainer">
           <h1>To-do List</h1>
           <input type="text" value={newLists} onChange={handleInputList} />
           <button onClick={handleAddList}>Add</button>
           <br/>

           <div className="toDoList">
              <ol>
                {lists.map((list, index) => <li key={index}>    
                                              <span className="text" >{list} </span>
                                              <button className="liButton" onClick={() => handleRemoveList(index)}>x</button>
                                              <button className="moveUp" onClick={() => handleMoveUpList(index)}>⬆️</button>
                                              <button className="moveDown" onClick={() => handleMoveDownList(index)}>⬇️</button>
                                            </li>)}
              </ol>
           </div>
        </div>);
}

export default Components;