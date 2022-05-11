import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {useMaterialYouPalette} from '@assembless/react-native-material-you'

export const useStyles = () => {
  const colors = useTheme();
  const palette = useMaterialYouPalette()

  const styles = StyleSheet.create({
    textHome: {
      color: colors.colors.text,
    },
    backgroundtab: {
      backgroundColor: palette ? palette.system_accent1[8] : 'teal'
    }
  });

  return {
    stylesTheme: styles,
  };
};
