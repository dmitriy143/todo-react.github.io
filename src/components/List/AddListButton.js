import React, { Fragment } from 'react';
import List from './List.js';


function AddListButton() {
  return (
    <Fragment>
      <List items={[
        {
          className: 'add-button-text',
          icon: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>),
          name: 'Добавить папку'
        }
      ]} />
      <div className="add-list-popap">

      </div>
    </Fragment>
  );
}

export default AddListButton;
