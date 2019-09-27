import React from 'react';
import { ThemeContext, getTheme } from 'react-native-material-ui';

import AppNavigator from "./src/Navigation/Navigation";
import { MAIN_COLOR } from './src/common/Constants';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: MAIN_COLOR,
    accentColor: "#241508",
  },
  toolbar: {
    container: {
      // height: 50,
    },
  },
  button: {

  }
};


const App = () => {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <AppNavigator />
    </ThemeContext.Provider>
  );
};

export default App;
