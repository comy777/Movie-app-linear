import { useContext, useState } from 'react';
import { getDiscover, getNowPlaying, getPopular, getTvOnAir } from '../api/request';
import { Result } from '../interfaces/response';
import { setColors } from '../utils/setColors';
import { AppContext } from '../context/AppContext';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Result[]>([]);
  const [discover, setDiscover] = useState<Result[]>([]);
  const [popular, setPopular] = useState<Result[]>([]);
  const [tvOnAir, setTvOnAir] = useState<Result[]>([]);
  const {loading, setLoading} = useContext(AppContext)

  const getMoviesApi = async () => {
    setLoading();
    const resp = await Promise.all([getNowPlaying, getDiscover, getPopular, getTvOnAir])
    await setColors({resp: resp[0].data.results, setData: setNowPlaying})
    await setColors({resp: resp[1].data.results, setData: setDiscover});
    await setColors({resp: resp[2].data.results, setData: setPopular});
    await setColors({resp: resp[3].data.results, setData: setTvOnAir});
    setLoading();
  };

  return {
    getMoviesApi,
    nowPlaying,
    discover,
    popular,
    tvOnAir,
    loading,
  }
}

export type name = 'nowPlaying' | 'discover'