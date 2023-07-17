import React, { useState } from 'react';
import { Modal, Typography, Space } from 'antd';
import { appStore } from '../store';
import type { AppStore } from '../types/AppStore';

const { Text, Title } = Typography;

export default function TransitionsModal(): JSX.Element {
  const modalState = appStore((store: AppStore) => store.modalState);
  const setModalState = appStore((store: AppStore) => store.setModalState);

  const windDirections = appStore((store: AppStore) => store.windDirections);
  const modalContent = appStore((store: AppStore) => store.modalContent);
  
  // const handleClose = () => { 
  //   open={modalState} onCancel={setModalState}
  //   // if (isOpen===true){ setIsOpen(false)} else { setIsOpen(true); }
  //   // setIsOpen(isOpen => isOpen ? false : true);
  // };
  
  return (
    <Modal 
      open={modalState} 
      centered
      width={300}
      footer={null}
      closable={true}
      style={{textAlign: 'center'}}
      onCancel={setModalState} 
    >
      <Title level={3}>Погода по часам</Title>
      {modalContent?.map((el) => (
        <Space align="center" key={el.temp_water}>
          <Text strong>{el.hour}:00</Text>
          <img
            alt={el.hour}
            src={`https://yastatic.net/weather/i/icons/funky/dark/${el.icon}.svg`}
          />
          <Text strong>{el.temp}°</Text>
          <Text strong>|</Text>
          <Text strong>{el.wind_speed} м/с</Text>
          <div
            style={{
              transform: `rotate(${windDirections[el.wind_dir]}deg)`,
              display: 'inline-block',
            }}
          >
            ➤
          </div>
        </Space>
      ))}
    </Modal>
  );
}
