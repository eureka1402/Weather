/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
import axios from 'axios';
import type { Hour, Weather } from '../types/Weather';
import type { AppStore } from '../types/AppStore';
import { cities } from './cities';

export const appStore = create<AppStore>((set, get) => ({
  weather: null,
  weatherState: 'morning',
  modalContent: null,
  modalState: false,
  lat: null,
  long: null,
  weatherImg: {
    clear:
      'https://avatars.mds.yandex.net/i?id=f9080f2784f48fd13f441005ebc7e6bd-5877649-images-thumbs&n=13',
    'partly-cloudy':
      'https://avatars.mds.yandex.net/i?id=20bdac9515f040ed64b6365a5137f44f89dd11c3-8183104-images-thumbs&n=13',
    cloudy:
      'https://avatars.mds.yandex.net/i?id=a1adadca9a8d7cdc412ea2d68e7204ccda04bd92-5354411-images-thumbs&n=13',
    overcast:
      'https://avatars.mds.yandex.net/i?id=d2870f81c6b424ed4db08ace71497d81c5308d56-8497447-images-thumbs&n=13',
    drizzle:
      'https://avatars.mds.yandex.net/i?id=0c9f41a121081cf4e80a06d19845c51de57b597b-5910407-images-thumbs&n=13',
    'light-rain':
      'https://avatars.mds.yandex.net/i?id=146a6e2ddde960ce08d52a2e3cc27cfca13ba196-8977890-images-thumbs&n=13',
    rain: 'https://avatars.mds.yandex.net/i?id=c196522f849b6586839f87887f81d3e988d7cb38-5098710-images-thumbs&n=13',
    'moderate-rain':
      'https://avatars.mds.yandex.net/i?id=9033e35d39a07c80133ad42b0180f56f0d8a81a3-8257715-images-thumbs&n=13',
    'heavy-rain':
      'https://avatars.mds.yandex.net/i?id=c760dba41a78389bec1c7ec6461b4412-5877852-images-thumbs&n=13',
    'continuous-heavy-rain':
      'https://avatars.mds.yandex.net/i?id=b3db88e66bcc93ef9e9e7e9a45f28586a631a29d-5232084-images-thumbs&n=13',
    showers:
      'https://avatars.mds.yandex.net/i?id=b4cba0e3dde14009840fa86c74a8633c-3884575-images-thumbs&n=13',
    'wet-snow':
      'https://avatars.mds.yandex.net/i?id=6fe6c38a747f1ecad047ccef8c9246317c94816d-7043984-images-thumbs&n=13',
    'light-snow':
      'https://avatars.mds.yandex.net/i?id=53397fd4e5bc359adf23f8f75ba6bdd8-5869619-images-thumbs&n=13',
    snow: 'https://avatars.mds.yandex.net/i?id=631c25be352acee6c7834e342bee3cd8f7e04102-8497333-images-thumbs&n=13',
    'snow-showers':
      'https://avatars.mds.yandex.net/i?id=b9bc41540f7a101eeaa583770b77cd8da0fd6c43-8548977-images-thumbs&n=13',
    hail: 'https://avatars.mds.yandex.net/i?id=227e24459001e2435b21ecf7c662903b301370f5-7886515-images-thumbs&n=13',
    thunderstorm:
      'https://avatars.mds.yandex.net/i?id=4aca521fb2a0a15cdd4b30260ab3ed490a274244-4024741-images-thumbs&n=13',
    'thunderstorm-with-rain':
      'https://avatars.mds.yandex.net/i?id=5ed283500addc4842048ffe2e54785d150461bd6-8507274-images-thumbs&n=13',
    'thunderstorm-with-hail':
      'https://avatars.mds.yandex.net/i?id=3a4a4832d46aeed7a707f618a97197da8163a03d-7887771-images-thumbs&n=13',
  },

  windDirections: {
    e: 0,
    se: 45,
    s: 90,
    sw: 135,
    w: 180,
    nw: 225,
    n: 270,
    ne: 315,
  },

  setCoord: (lat?: number | null, long?: number | null) => {
    // console.log(lat, long, '')
    set({ lat, long });
  },

  getWeather() {
    // console.log(lat, long, 'дфе дщвощутау')
    const { lat, long } = get();
    if (!lat && !long) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(position, 'position in get weather')
      fetch(`http://localhost:3000/weather?latitude=${latitude}&longitude=${longitude}`)
        .then((res) => res.json())
        .then((data: Weather) => {
          console.log(data, 'вфефеефееффефее')
          set({ weather: data });
        })
        .catch(console.log);
      })
    } else {
      fetch(`http://localhost:3000/weather?latitude=${lat}&longitude=${long}`)
        .then((res) => res.json())
        .then((data: Weather) => {
          console.log(data, 'вфефеефееффефее')
          set({ weather: data });
        })
        .catch(console.log);
    }
  },

  setWeatherState(weatherState: AppStore['weatherState']) {
    set({ weatherState });
  },

  setModalState() {
    set({ modalState: !get().modalState });
  },

  openModalState(modalContent: Hour[], index: number) {
    if (index < 7) {
      set({ modalContent });
      get().setModalState();
    }
  },

  findNewCity(data) {
    if (!cities[data]) return;
    axios
      .post('http://localhost:3000/new/weather', cities[data])
      .then((res) => {
        console.log(res);
        set({ weather: res.data });
      })
      .catch(console.log);
  },
}));
