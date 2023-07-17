import type { NumberObject } from '../types/AppStore';

export type CityObject = {
  [key: string]: NumberObject;
};

export const cities: CityObject = {
  Москва: {
    latitude: 55.833333,
    longitude: 37.616667,
  },
  'Санкт-Петербург': {
    latitude: 59.939095,
    longitude: 30.315868,
  },
  Новосибирск: {
    latitude: 55.0083526,
    longitude: 82.9357327,
  },
  Екатеринбург: {
    latitude: 56.8389261,
    longitude: 60.6057025,
  },
  'Нижний Новгород': {
    latitude: 56.2965039,
    longitude: 43.936059,
  },
  Казань: {
    latitude: 55.796127,
    longitude: 49.106405,
  },
  Челябинск: {
    latitude: 55.1644419,
    longitude: 61.4368432,
  },
  Омск: {
    latitude: 54.9884804,
    longitude: 73.3242361,
  },
  Самара: {
    latitude: 53.2415041,
    longitude: 50.2212463,
  },
  'Ростов-на-Дону': {
    latitude: 47.2357137,
    longitude: 39.701505,
  },
  Уфа: {
    latitude: 54.7387621,
    longitude: 55.9720554,
  },
  Красноярск: {
    latitude: 56.0105636,
    longitude: 92.852572,
  },
  Пермь: {
    latitude: 58.0103211,
    longitude: 56.2341774,
  },
  Волгоград: {
    latitude: 48.7072005,
    longitude: 44.5170207,
  },
  Краснодар: {
    latitude: 45.0354704,
    longitude: 38.9753137,
  },
  Воронеж: {
    latitude: 51.6605985,
    longitude: 39.2005858,
  },
  Саратов: {
    latitude: 51.5335578,
    longitude: 46.0342574,
  },
  Тольятти: {
    latitude: 53.5085013,
    longitude: 49.4198598,
  },
  Калуга: {
    latitude: 54.513845,
    longitude: 36.2616888,
  },
  Ижевск: {
    latitude: 56.8527444,
    longitude: 53.2113961,
  },
  Барнаул: {
    latitude: 53.3473797,
    longitude: 83.7784166,
  },
  Иркутск: {
    latitude: 52.2863871,
    longitude: 104.2806603,
  },
};
