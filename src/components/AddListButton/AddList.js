import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../List/List.js';
import Badge from '../Badge/Badge.js';

import './AddList.scss';

import closePopup from '../../assets/img/close-popup.svg'


function AddListButton({ colors, onAdd }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id);
    }
  }, [colors]);

  const onClose = () => {
    setVisiblePopup(false)
    setInputValue('')
    selectColor(colors[0].id)
  }

  const addList = () => {
    if (!inputValue) {
      alert('Введите название папки')
      return
    }
    // const color = colors.find(color => color.id === selectedColor).name
    // onAdd({
    //   "id": Math.random(),
    //   "name": inputValue,
    //   "colorId": selectedColor,
    //   color
    // })
    // onClose()

    setIsLoading(true);
    axios
      .post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: selectedColor
      })
      .then(({ data }) => {
        const color = colors.filter(c => c.id === selectedColor)[0].name;
        const listObj = { ...data, color: { name: color } };
        onAdd(listObj);
        onClose();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            classButton: 'add-button-text',
            icon: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>),
            name: 'Добавить папку'
          }
        ]} />
      {visiblePopup &&
        (<div className="add-list__popap-container">
          <div className="add-list__popap">
            <img onClick={onClose} src={closePopup} alt="close" className="add-list__popup-close-btn" />

            <input
              value={inputValue}
              onChange={event => { setInputValue(event.target.value) }}
              className="add-list__field field"
              type="text"
              placeholder="Название папки" />

            <div className="add-list__color">
              {colors.map((color) => (
                <Badge
                  click={() => selectColor(color.id)}
                  key={color.id} color={color.name}
                  sizeBadge="badge--add-button"
                  className={selectedColor === color.id && 'active'}
                />
              ))}
            </div>
            <button onClick={addList} className="add-list__button button">{isLoading ? 'Добавление...' : 'Добавить'}</button>
          </div>
        </div>
        )}
    </div>
  );
}

export default AddListButton;
