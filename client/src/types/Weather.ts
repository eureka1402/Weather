export type Tzinfo = {
  name: string;
  abbr: string;
  dst: boolean;
  offset: number;
};

export type Info = {
  n: boolean;
  geoid: number;
  url: string;
  lat: number;
  lon: number;
  tzinfo: Tzinfo;
  def_pressure_mm: number;
  def_pressure_pa: number;
  slug: string;
  zoom: number;
  nr: boolean;
  ns: boolean;
  nsr: boolean;
  p: boolean;
  f: boolean;
  _h: boolean;
};

export type District = {
  id: number;
  name: string;
};

export type Locality = {
  id: number;
  name: string;
};

export type Province = {
  id: number;
  name: string;
};

export type Country = {
  id: number;
  name: string;
};

export type GeoObject = {
  district: District;
  locality: Locality;
  province: Province;
  country: Country;
};

export type Yesterday = {
  temp: number;
};

export type AccumPrec = {
  1: number;
  3: number;
  7: number;
};

export type Fact = {
  obs_time: number;
  uptime: number;
  temp: number;
  feels_like: number;
  temp_water: number;
  icon: string;
  condition: string;
  cloudness: number;
  prec_type: number;
  prec_prob: number;
  prec_strength: number;
  is_thunder: boolean;
  wind_speed: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  daytime: string;
  polar: boolean;
  season: string;
  source: string;
  accum_prec: AccumPrec;
  soil_moisture: number;
  soil_temp: number;
  uv_index: number;
  wind_gust: number;
};

export type NightShort = {
  _source: string;
  temp: number;
  temp_water: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  soil_temp: number;
  soil_moisture: number;
  prec_mm: number;
  prec_prob: number;
  prec_period: number;
  cloudness: number;
  prec_type: number;
  prec_strength: number;
  icon: string;
  condition: string;
  uv_index: number;
  feels_like: number;
  daytime: string;
  polar: boolean;
  fresh_snow_mm: number;
};

export type DayPart = {
  _source: string;
  temp_min: number;
  temp_avg: number;
  temp_max: number;
  temp_water: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  soil_temp: number;
  soil_moisture: number;
  prec_mm: number;
  prec_prob: number;
  prec_period: number;
  cloudness: number;
  prec_type: number;
  prec_strength: number;
  icon: string;
  condition: string;
  uv_index: number;
  feels_like: number;
  daytime: string;
  polar: boolean;
  fresh_snow_mm: number;
};

export type DayShort = {
  _source: string;
  temp: number;
  temp_min: number;
  temp_water: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  soil_temp: number;
  soil_moisture: number;
  prec_mm: number;
  prec_prob: number;
  prec_period: number;
  cloudness: number;
  prec_type: number;
  prec_strength: number;
  icon: string;
  condition: string;
  uv_index: number;
  feels_like: number;
  daytime: string;
  polar: boolean;
  fresh_snow_mm: number;
};

export type Parts = {
  night: DayPart;
  night_short: NightShort;
  day: DayPart;
  morning: DayPart;
  evening: DayPart;
  day_short: DayShort;
};

export type Hour = {
  hour: string;
  hour_ts: number;
  temp: number;
  feels_like: number;
  temp_water: number;
  icon: string;
  condition: string;
  cloudness: number;
  prec_type: number;
  prec_strength: number;
  is_thunder: boolean;
  wind_dir: string;
  wind_speed: number;
  wind_gust: number;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  uv_index: number;
  soil_temp: number;
  soil_moisture: number;
  prec_mm: number;
  prec_period: number;
  prec_prob: number;
};

export type Biomet = {
  index: number;
  condition: string;
};

export type Forecast = {
  date: string;
  date_ts: number;
  week: number;
  sunrise: string;
  sunset: string;
  rise_begin: string;
  set_end: string;
  moon_code: number;
  moon_text: string;
  parts: Parts;
  hours: Hour[];
  biomet: Biomet;
};

export type Weather = {
  now: number;
  now_dt: Date;
  info: Info;
  geo_object: GeoObject;
  yesterday: Yesterday;
  fact: Fact;
  forecasts: Forecast[];
};
