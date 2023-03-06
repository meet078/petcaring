import React, { FC } from 'react';
import { View } from 'react-native';
import { appbar, appbarMenu, appbarTitle } from '../../style/Appbar';
import Text from './custom/Text';
import IconButton from './IconButton';


export interface appbarprops {
    title: string,
    actionbuttons?: {
        label?: string,
        icon: string,
        onPress?: () => void
    }[]
}
const AppBar: FC<appbarprops> = ({ title, actionbuttons }) => (
    <View style={appbar}>
        <Text style={appbarTitle}>Pet Caring</Text>
        <View style={appbarMenu}>
            {
                actionbuttons?.map(button => {
                    return <IconButton key={button.icon} icon={{ value: button.icon }} onPress={button.onPress} />
                })
            }
        </View>
    </View>
)

export default AppBar;