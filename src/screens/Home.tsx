import React, {useEffect} from 'react';
import { ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../styles/globalStyles';
import ListComponent from '../components/ListComponent';
import FooterComponent from '../components/FooterComponent';

const {width} = Dimensions.get('window');

const Home = () => {
  const {nowPlaying, getMoviesApi, loading, discover, popular, tvOnAir} = useMovies();

  useEffect(() => {
    getMoviesApi();
  }, []);

  if(loading || nowPlaying.length === 0) return <ActivityIndicator />
  
  return (
    <ScrollView>
      <CarouselComponent
        movies={nowPlaying}
        parallax={true}
        width={width}
        styleImage={styles.image}
        styleView={styles.imageContainer}
        styleItem={styles.item}
      />
      <ListComponent movies={discover} title='Discover' width={width} />
      <ListComponent movies={popular} title='Popular' width={width} />
      <ListComponent movies={tvOnAir} title='Tv on air' width={width} />
      <FooterComponent />
    </ScrollView>
  );
};

export default Home;
