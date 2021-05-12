import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/Badge.js';

import './List.scss';

function List({ items, classBottom, onClick }) {
  return (
    <ul onClick={onClick} className={`todo__list list ${classBottom ? classBottom : ''}`}>
      {items.map((item, index) => (
        <li key={index} className={classNames('list__item', { 'list__item-active': item.active })}>
          <i className="list__item-container">
            {item.icon ? item.icon : <Badge color={item.color} />}
          </i>
          <span className={classNames('list__name', { [`list__name--${item.classButton}`]: item.classButton })} >{item.name}</span>
        </li>
      ))
      }
    </ul >
  )
}

export default List;