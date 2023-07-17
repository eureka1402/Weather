import type { Hour, Weather } from './Weather';

type StringObject = Record<string, string>;
export type NumberObject = {
  [key: string]: number;
};

export type AppStore = {
  weather: Weather | null;
  weatherState: 'morning' | 'evening' | 'day' | 'night';
  weatherImg: StringObject;
  lat: number | null;
  long: number | null;
  windDirections: NumberObject;
  modalContent: null | Hour[];
  modalState: boolean;
  setCoord: (lat?: number | null, long?: number | null) => void
  getWeather: () => void;
  setWeatherState: (a: 'morning' | 'evening' | 'day' | 'night') => void;
  setModalState: () => void;
  openModalState: (a: Hour[], b: number) => void;
  findNewCity: (a: string) => void;
};
