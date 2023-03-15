import { petorganization, species } from '../interface/Data';
import Organizaton from './home/Organization';
import Species from './home/Species';
import Slider from './utils/Slider';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconButton from './utils/custom/IconButton';
import Icon from './utils/custom/Icon';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const imageList: { id: number; url: string }[] = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
];
const speciesdata: species[] = [
    {
        id: 1,
        name: 'hello',
        image:
            'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png',
    },
    {
        id: 2,
        name: 'spices',
        image:
            'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png',
    },
    {
        id: 3,
        name: 'wid',
        image:
            'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png',
    },
    {
        id: 4,
        name: 'ho',
        image:
            'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png',
    },
];
const petorganiztiondata: Pick<
    petorganization,
    'id' | 'name' | 'profileimage'
>[] = [
        {
            id: 10,
            name: 'abc',
            profileimage:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Z2O_8YM4J_FyMNx54W66Ulxmh42S1jpiw&usqp=CAU',
        },
        {
            id: 11,
            name: 'tyz',
            profileimage:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Z2O_8YM4J_FyMNx54W66Ulxmh42S1jpiw&usqp=CAU',
        },
        {
            id: 12,
            name: 'let',
            profileimage:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Z2O_8YM4J_FyMNx54W66Ulxmh42S1jpiw&usqp=CAU',
        },
        {
            id: 13,
            name: 'you',
            profileimage:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Z2O_8YM4J_FyMNx54W66Ulxmh42S1jpiw&usqp=CAU',
        },
        {
            id: 14,
            name: 'xyz',
            profileimage:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Z2O_8YM4J_FyMNx54W66Ulxmh42S1jpiw&usqp=CAU',
        },
    ];

const listHeaderComponent = (
    <View>
        <Species species_data={speciesdata} />
        <Slider images={imageList} />
    </View>
);
type props = NativeStackScreenProps<RootStackParamList, 'home'>;
const Home = ({ route, navigation }: props): JSX.Element => {
    const Tab = createBottomTabNavigator();
    const appState = useContext(AppContext);
    return (
        <Tab.Navigator sceneContainerStyle={{backgroundColor: appState?.colorValue.backgroundSubtle}} screenOptions={{ headerShown: false, tabBarActiveTintColor: "orange", tabBarStyle:{paddingTop: 10, backgroundColor: appState?.colorValue.background}, tabBarLabelStyle: { fontWeight: 'bold' } }}>
            <Tab.Screen name="home" options={{
                tabBarLabel: 'Home', tabBarIcon({ color, size }) {
                    return <Icon value='home' color={color} size={size} />
                },
            }} component={() => {

                return <View>

                    <Organizaton
                        listHeaderComponent={listHeaderComponent}
                        petorganizationdata={petorganiztiondata}
                    />
                </View>
            }
            } />
            <Tab.Screen name="pets" options={{tabBarIcon({color, size}) {
                return <Icon value='pets' color={color} size={size} />
            },}}  component={() => <></>} />
            <Tab.Screen name="settings" options={{tabBarIcon({color, size}) {
                return <Icon value='settings' color={color} size={size} />
            },}}   component={() => <></>} />
        </Tab.Navigator>
    );
}
export default Home;
