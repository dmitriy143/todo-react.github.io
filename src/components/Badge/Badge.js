import React from 'react';
import classNames from 'classnames'

import './Badge.scss'

const Badge = ({ color, sizeBadge, click, className }) => {
  return (<i onClick={click} className={`${classNames('badge', { [`badge--${color}`]: color }, sizeBadge, className)}`}></i>)
}

export default Badge;