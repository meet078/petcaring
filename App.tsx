import {Appearance,View } from 'react-native';
import AppState from './context/AppState';
import Root from './Root';
export type RootStackParamList = {
  home: undefined,
  signin: undefined,
}
function App(): JSX.Element {
  Appearance.getColorScheme
  return (
    <AppState>
      <Root />
    </AppState>
  );
}

export default App;