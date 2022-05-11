import { Result } from '../interfaces/response';
import { getColorsImage } from './colors';
import { SetColorsProps } from '../interfaces/components';

export const setColors = async ({resp, setData} : SetColorsProps) => {
  let data: Result[] = resp;
  resp.map(async (item, i) => {
    const {poster_path} = item;
    if (!poster_path) {
      item.background = {
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
      return data;
    }
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const colors = await getColorsImage(image);
    item.background = colors;
    if(i === resp.length - 1){
      setData(data);
    }
  })
}