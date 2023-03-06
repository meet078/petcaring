import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList = {
    home: undefined,
    signin: undefined,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default RootStack;