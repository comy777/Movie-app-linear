import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient'
import { MovieComponentProps } from '../interfaces/components';
import { useNavigation } from '@react-navigation/native';

const MovieComponent = (props : MovieComponentProps) => {
  const navigation = useNavigation();
  const {
    item,
    parallaxProps,
    styleContainer,
    styleImage,
    styleItem,
    styleLinear,
  } = props;
  const {poster_path, background, id} = item;
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <LinearGradient
      colors={background ? [background.dominant, background.vibrant] : ['white', 'white']}
      style={styleLinear}>
      <TouchableOpacity onPress={() => navigation.navigate('details stack', {id})}>
        <View style={styleItem}>
          {parallaxProps ? (
            <ParallaxImage
              source={{uri: image}}
              containerStyle={styleContainer}
              style={styleImage}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
          ) : (
            <Image source={{uri: image}} style={styleImage} />
          )}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default MovieComponent