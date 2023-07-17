import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './style.css';
import humidityPng from './humidity.png';
import pressurePng from './pressure.png';
import type { Hour } from '../../types/Weather';
import { appStore } from '../../store';
import type { AppStore } from '../../types/AppStore';

type OneCardProps = {
  src: string;
  date: string;
  icon: string;
  temp_avg: number;
  temp_min: number;
  temp_max: number;
  wind_speed: number;
  wind_dir: number;
  humidity: number;
  pressure: number;
  index: number;
  hours: Hour[];
};

function OneCard(props: OneCardProps): JSX.Element {
  const {
    src,
    date,
    icon,
    temp_avg,
    temp_min,
    temp_max,
    wind_speed,
    wind_dir,
    humidity,
    pressure,
    index,
    hours,
  } = props;

  const openModalState = appStore((store: AppStore) => store.openModalState);

  return (
    <Card style={{ width: 300 }} cover={<img alt="weather" style={{ height: 168 }} src={src} />} onClick={() => openModalState(hours, index)}>
      <Typography.Title level={4}>
        {date}{' '}
        <img alt={date} src={` https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg`} />
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Typography.Text strong>{temp_avg} °C</Typography.Text>
          <br/>
          <Typography.Text>Max: <strong>{temp_max} °C</strong></Typography.Text>
          <br/>
          <Typography.Text>Min: <strong>{temp_min} °C</strong></Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text>
            💨 {wind_speed} м/с{' '}
            <ArrowRightOutlined style={{ transform: `rotate(${wind_dir}deg)`, display: 'inline-block' }} />
          </Typography.Text>
          <br/>
          <Typography.Text className="text-center">
            <img src={humidityPng} alt="humidity" className="humidityPng" /> {humidity} %
          </Typography.Text>
          <br/>
          <Typography.Text className="text-center">
            <img src={pressurePng} style={{ height: 21 }}alt="pressure" className="pressurePng" /> {pressure} мм рт ст
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
}
export default OneCard;
