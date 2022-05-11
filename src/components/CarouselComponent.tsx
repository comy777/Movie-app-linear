import React from 'react'
import { Text } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import MovieComponent from './MovieComponent';
import { CarouselComponentProps } from '../interfaces/components';
import { styles } from '../styles/globalStyles';


const CarouselComponent = (props : CarouselComponentProps) => {
  const {movies, parallax, styleImage, styleView, width, styleItem} = props
  return (
    <Carousel
      data={movies}
      sliderWidth={width}
      sliderHeight={width}
      itemWidth={width}
      hasParallaxImages={parallax}
      renderItem={({item, index}, parallaxProps) => (
        <MovieComponent
          item={item}
          index={index}
          parallaxProps={{...parallaxProps}}
          styleContainer={styleView}
          styleImage={styleImage}
          styleItem={styleItem}
          styleLinear={styles.borderMediumBottom}
        />
      )}
      autoplay={true}
      loop={true}
      autoplayInterval={7000}
      ListEmptyComponent={() => <Text>No hay peliculas</Text>}
    />
  );
}

export default CarouselComponent