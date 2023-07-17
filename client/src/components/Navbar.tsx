import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Input, Space } from 'antd';
import { RiseOutlined, BulbOutlined, AppstoreAddOutlined, CloudOutlined } from '@ant-design/icons';
import { appStore } from '../store';
import type { AppStore } from '../types/AppStore';
import MorningIcon from './svg/MorningIcon'
import DayIcon from './svg/DayIcon'
import EveningIcon from './svg/EveningIcon';
import NightIcon from './svg/NightIcon';

function Navbar(): JSX.Element {
  const setWeatherState: (a: 'morning' | 'evening' | 'day' | 'night') => void = appStore(
    (store: AppStore) => store.setWeatherState,
  );

  const setCoord = appStore((store: AppStore) => store.setCoord);
  useEffect(setCoord, []);

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  return (
    <Row align="middle" style={{backgroundColor: '#09101A', padding: '10px 0'}}>
      <Col span={6} offset={1}>
        <Space size="large">
          <a onClick={() => setWeatherState('morning')}>{<MorningIcon />} </a>
          <a onClick={() => setWeatherState('day')}>{<DayIcon/>}</a>
          <a onClick={() => setWeatherState('evening')}> {<EveningIcon/>}</a>
          <a onClick={() => setWeatherState('night')} > {<NightIcon/>}</a>
        </Space>
      </Col>
      <Col span={10} offset={7}>
        <Space>
          <Input placeholder='Широта' onChange={(e) => setLat(e.target.value)} />
          <Input placeholder='Долгота' onChange={(e) => setLong(e.target.value)} />
          <Button onClick={() => setCoord(Number(lat), Number(long))}>Поиск</Button>
        </Space>
      </Col>
    </Row>
  );
}

export default Navbar;
