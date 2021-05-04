import React from 'react';
import List from './components/List/List.js';

import allTasks from './assets/img/allTasks.svg'

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            id: 0,
            icon: allTasks,
            name: 'все задачи'
          }
        ]} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
