import { ParallaxImageProps } from "react-native-snap-carousel";
import { Result, ColorsMovie } from './response';
import { StyleProp, ViewStyle, ImageStyle } from 'react-native';

export interface MovieComponentProps {
  item: Result;
  index: number;
  parallaxProps?: ParallaxImageProps;
  styleContainer: StyleProp<ViewStyle>
  styleImage: StyleProp<ImageStyle>,
  styleItem: StyleProp<ViewStyle>
  styleLinear: StyleProp<ViewStyle>
  backgroundFull?: boolean,
}

export interface SetColorsProps {
  resp: Result[];
  setData: (movies: Result[]) => void;
}

export interface ListComponentProps {
  movies: Result[];
  title: string;
  width: number;
}

export interface CarouselComponentProps {
  movies: Result[];
  parallax: boolean;
  styleView: StyleProp<ViewStyle>;
  styleImage: StyleProp<ImageStyle>;
  styleItem: StyleProp<ViewStyle>;
  width: number;
}