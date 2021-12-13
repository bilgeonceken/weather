import CloudyIcon from '../assets/svg/cloudy.svg';
import ClearIcon from '../assets/svg/clear.svg';
import RainyIcon from '../assets/svg/rainy.svg';

export const TEXTS = {
  CLOUDY: 'Cloudy',
  CLEAR: 'Clear',
  RAIN: 'Rain',
};

export const WEATHER_TYPES = {
  Rain: 'Rain',
  Clouds: 'Clouds',
  Clear: 'Clear',
};

export const weatherDataMap = {
  [WEATHER_TYPES.Clouds]: {
    text: TEXTS.CLOUDY,
    icon: CloudyIcon,
  },
  [WEATHER_TYPES.Clear]: {
    text: TEXTS.CLEAR,
    icon: ClearIcon,
  },
  [WEATHER_TYPES.Rain]: {
    text: TEXTS.RAIN,
    icon: RainyIcon,
  },
};
