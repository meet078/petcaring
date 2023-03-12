import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { StatusBar, View } from 'react-native';
import Home from './component/Home';
import SignIn from './component/SignIn';
import AppBar from './component/utils/AppBar';
import AppContext from './context/AppContext';
export type RootStackParamList = {
    home: undefined,
    signin: undefined,
}
const Root = (): JSX.Element => {
    const RootStack = createNativeStackNavigator<RootStackParamList>();
    const appState = useContext(AppContext);
    return (
        <View style={{ height: "100%", backgroundColor: appState?.colorValue.backgroundSubtle }}>
            <StatusBar barStyle={appState?.darkMode ? 'light-content' : 'dark-content'} backgroundColor={appState?.colorValue.background} />
            <NavigationContainer>
                <RootStack.Navigator initialRouteName='home'>
                    <RootStack.Screen name="home" component={Home} options={{
                        contentStyle: { backgroundColor: appState?.colorValue.backgroundSubtle},
                        
                        header: ({ navigation, route, options, back }) => (<AppBar title='' actionbuttons={[{ icon: "search" }, { icon: appState?.signIn ? "person" : "login", onPress: () => { navigation.navigate("signin") } }]} />
                        )
                    }} />
                    <RootStack.Screen name='signin' component={SignIn} options={{
                        headerShown: false,
                        contentStyle: { backgroundColor: appState?.colorValue.backgroundSubtle },
                    }} />
                </RootStack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default Root;