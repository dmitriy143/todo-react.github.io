import React from 'react';
import './List.scss';

function List({ items }) {
  return (
    <ul className="todo__list">
      {items.map((item) => (
        <li className="todo__item">
          <i>
            <img src={item.icon} alt="List icon" />
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default List;