import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {MaterialYouService} from '@assembless/react-native-material-you';
import AppRoutes from './src/routes/AppRoutes';
import {AppContextProvider} from './src/context/AppContext';

LogBox.ignoreLogs(['deprecated-react-native-prop-types', 'ViewPropTypes']);

const AppState = ({children}: any) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

const App = () => {
  return (
    <MaterialYouService>
      <AppState>
        <AppRoutes />
      </AppState>
    </MaterialYouService>
  );
};

export default App;
