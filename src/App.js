import React, { useState } from 'react';
import List from './components/List/List.js';
import AddList from './components/AddListButton/AddList.js';

import DB from './assets/db.json'

import allTasks from './assets/img/allTasks.svg';


function App() {
  const [lists, setLists] = useState(DB.lists.map(item => {
    item.color = DB.colors.filter(color => color.id === item.colorId)[0].name
    return item;
  }));
  // console.log(lists)
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
        <List items={lists}
          classBottom={'list--bottom'}
          isRemovable />
        <AddList colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
