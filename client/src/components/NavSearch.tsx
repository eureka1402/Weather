import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { appStore } from '../store';
import type { AppStore } from '../types/AppStore';

export default function NavSearch(): JSX.Element {
  const [inputValue, setInputValue] = useState('');

  const findNewCity = appStore((store: AppStore) => store.findNewCity);

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
  }

  function clickHandler(): void {
    findNewCity(inputValue);
    setInputValue('');
  }

  return (
    <Input
      placeholder="Поиск..."
      value={inputValue}
      onChange={inputHandler}
      suffix={
        <SearchOutlined
          onClick={clickHandler}
          style={{ color: 'rgba(0,0,0,.45)' }}
        />
      }
    />
  );
}
