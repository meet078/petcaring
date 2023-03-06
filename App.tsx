import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import Home from './component/Home';
import AppBar from './component/utils/AppBar';
import AppContext from './context/AppContext';
import AppState from './context/AppState';
import RootStack from './navigation/types';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const appState = useContext(AppContext);
  return (
    <AppState>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='home' >
          <RootStack.Screen name="home" component={Home} options={{
            header: ({ navigation, route, options, back }) => (<AppBar title='' actionbuttons={[{ icon: "search" }, { icon: appState?.signIn ? "person" : "login" }]} />
            )
          }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AppState>
  );
}

export default App;