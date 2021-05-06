import React from 'react';
import List from './components/List/List.js';

import allTasks from './assets/img/allTasks.svg'
// import addBbuttonPlus from './assets/img/add_button_plus.svg'


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

        <List items={[
          {
            className: 'add-button-text',
            icon: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1 6H11" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>),
            name: 'Добавить папку'
          }
        ]}
          isRemovable />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
