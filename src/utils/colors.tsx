import ImageColors from 'react-native-image-colors'
import { ColorsMovie } from '../interfaces/response';

export const getColorsImage = async (image: string) => {
  const data = await ImageColors.getColors(image);
  let colors: ColorsMovie = {
    average: 'white',
    darkMuted: 'white',
    darkVibrant: 'white',
    dominant: 'white',
    lightMuted: 'white',
    lightVibrant: 'white',
    muted: 'white',
    platform: 'android',
    vibrant: 'white',
  };
  if(data.platform === 'android'){
    const {average, darkMuted, dominant, vibrant, muted} = data
    if(average)colors.average = average
    if(darkMuted)colors.darkMuted = darkMuted;
    if(dominant) colors.dominant = dominant;
    if(vibrant) colors.vibrant = vibrant;
    if(muted) colors.muted = muted;
  }
  return colors
};
