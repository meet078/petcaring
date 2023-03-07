import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { StatusBar } from 'react-native';
import Home from './component/Home';
import SignIn from './component/SignIn';
import AppBar from './component/utils/AppBar';
import AppContext from './context/AppContext';
import AppState from './context/AppState';
export type RootStackParamList = {
  home: undefined,
  signin: undefined,
}
function App(): JSX.Element {

  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const appState = useContext(AppContext);
  return (
    <AppState>
      <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='home' >
          <RootStack.Screen name="home" component={Home} options={{
            header: ({ navigation, route, options, back }) => (<AppBar title='' actionbuttons={[{ icon: "search" }, { icon: appState?.signIn ? "person" : "login", onPress:()=>{navigation.navigate("signin")} }]} />
            )
          }} />
          <RootStack.Screen name='signin' component={SignIn} options={{ headerShown: false}} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AppState>
  );
}

export default App;