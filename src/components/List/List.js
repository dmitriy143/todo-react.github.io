import React from 'react';
import classNames from 'classnames';

import './List.scss';

function List({ items, classBottom }) {
  return (
    <ul className={`todo__list list ${classBottom ? classBottom : ''}`}>
      {items.map((item, index) => (
        <li key={index} className={classNames('list__item', { 'list__item-active': item.active })}>
          <i className="list__item-container">
            {item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}
          </i>
          <span className={classNames('list__name', `list__name--${item.className}`)} >{item.name}</span>
        </li>
      ))
      }
    </ul >
  )
}

export default List;