import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/Badge.js';

import removeSvg from '../../assets/img/remove.svg'

import './List.scss';

function List({ items, isRemovable, classBottom, onClick, onRemove }) {
  const removeList = item => {
    if (window.confirm('Вы действительно хотите удадить список?')) {
      onRemove(item)
    }
  }

  return (
    <ul onClick={onClick} className={`todo__list list ${classBottom ? classBottom : ''}`}>
      {items.map((item, index) => (
        <li key={index} className={classNames('list__item', { 'list__item-active': item.active })}>
          <i className="list__item-container">
            {item.icon ? item.icon : <Badge color={item.color} />}
          </i>
          <span className={classNames('list__name', { [`list__name--${item.classButton}`]: item.classButton })} >{item.name}</span>
          {isRemovable && <img onClick={() => removeList(item)} className="list__remove-icon" src={removeSvg} alt="remove icon" />}
        </li>
      ))
      }
    </ul >
  )
}

export default List;