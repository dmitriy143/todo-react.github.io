import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { List, AddList, Tasks } from './components/index'

// import DB from './assets/db.json';

import allTasks from './assets/img/allTasks.svg';


function App() {

  // const [lists, setLists] = useState(DB.lists.map(item => {
  //   item.color = DB.colors.find(color => color.id === item.colorId).name
  //   return item;
  // }));

  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);


  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
      });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);

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
        {/* <List items={lists} onRemove={(obj) => {
          console.log(obj)
        }}
          classBottom={'list--bottom'}
          isRemovable />
        <AddList onAdd={onAddList} colors={DB.colors} />
      </div>
      <div className="todo__tasks">
        <Tasks /> */}
        {lists ? (
          <List
            items={lists}
            classBottom={'list--bottom'}
            onRemove={id => {
              const newLists = lists.filter(item => item.id !== id);
              setLists(newLists);
            }}
            isRemovable
          />
        ) : (
          'Загрузка...'
        )}
        <AddList onAdd={onAddList} colors={colors} />
      </div>
      <div className="todo__tasks">{lists && <Tasks list={lists[1]} />}</div>
    </div>
  );
}

export default App;
