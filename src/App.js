import React, { useState } from 'react';
import List from './components/List/List.js';
import AddList from './components/AddListButton/AddList.js';

import DB from './assets/db.json'

import allTasks from './assets/img/allTasks.svg';


function App() {
  const [lists, setLists] = useState(DB.lists.map(item => {
    item.color = DB.colors.find(color => color.id === item.colorId).name
    return item;
  }));

  const onAddList = (obj) => {
    const newList = [
      ...lists,
      obj
    ]
    setLists(newList)
  }

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: (<img src={allTasks} alt="List icon" />),
            name: 'Все задачи',
            active: true
          }
        ]} />
        <List items={lists} onRemove={(obj) => {
          console.log(obj)
        }}
          classBottom={'list--bottom'}
          isRemovable />
        <AddList onAdd={onAddList} colors={DB.colors} />
      </div>
      <div className="todo__tasks">
        <div className="todo__warpper-tasks tasks">
          <h2 className="tasks__title">Фронтенд</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
