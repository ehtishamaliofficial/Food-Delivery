import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigators';
import GlobalFont from 'react-native-global-font';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    GlobalFont.applyGlobal('Inter');
  }, []);
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
