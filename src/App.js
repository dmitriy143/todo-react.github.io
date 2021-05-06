import React from 'react';
import List from './components/List/List.js';
import AddListButton from './components/List/AddListButton.js';

import allTasks from './assets/img/allTasks.svg';


function App() {
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
        <List items={[
          {
            color: 'green',
            name: 'Покупки'
          },
          {
            color: 'blue',
            name: 'Фронтенд',
            active: true
          },
          {
            color: 'pink',
            name: 'Фильмы и сериа...'
          },
          {
            color: 'light-green',
            name: 'Книги'
          },
          {
            color: 'gray',
            name: 'Личное'
          }
        ]}
          classBottom={'list--bottom'} />

        <AddListButton />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
