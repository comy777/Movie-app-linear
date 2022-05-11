import { StyleSheet, Dimensions } from "react-native";
import {getPaletteSync} from '@assembless/react-native-material-you'

const {width: screenWidth} = Dimensions.get('window')
const palette = getPaletteSync();


export const styles = StyleSheet.create({
  item: {
    width: screenWidth,
    height: screenWidth,
  },
  imageContainer: {
    flex: 1,
    marginVertical: 15,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  cardMedium: {padding: 15},
  titleCardMedium: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color: palette ? palette.system_accent1[8] : 'teal',
  },
  containerCardMedium: {marginRight: 5},
  itemCardMedium: {
    height: 200,
    width: 120,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCardMedium: {height: 190, width: 110, resizeMode: 'center'},
  linearCardMedium: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  viewTextCardMedium: {width: 120},
  textCardMedium: {
    textAlign: 'center',
    color: palette ? palette.system_accent1[8] : 'teal',
  },
  borderMediumBottom: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
