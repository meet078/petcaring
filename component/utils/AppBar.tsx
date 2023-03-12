import React, { FC, useContext, useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import AppContext from '../../context/AppContext';
import CustomView from './custom/CustomView';
import Text from './custom/Text';
import IconButton from './custom/IconButton';

export interface appbarprops {
    title: string,
    actionbuttons?: {
        label?: string,
        icon: string,
        onPress?: () => void
    }[]
}
const AppBar: FC<appbarprops> = ({ title, actionbuttons }) => {
    const styles = StyleSheet.create({
        appbar: {
            //height appbar 
            height: 60,
            // add padding
            paddingHorizontal: 10,
            paddingVertical: 5,
            // add shadow
            shadowOpacity: 0.4,
            shadowRadius: 5,
            elevation: 5,
            // set layout and align child item
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // border radius
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
        },
        appbarTitle: {
            fontWeight: "bold",
            fontSize: 20
        },
        appbarMenu: {
            flexDirection: "row",
        },
    })
    const appState = useContext(AppContext);
    const toggleSwitch = () => appState?.changeMode();
    return (
        <CustomView style={styles.appbar}>
            <Text style={styles.appbarTitle}>Pet Caring</Text>
            <View style={styles.appbarMenu}>
                {
                    actionbuttons?.map(button => {
                        return <IconButton key={button.icon} icon={{ value: button.icon }} onPress={button.onPress} />
                    })
                }
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={appState?.darkMode ? 'orange' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={appState?.darkMode}
                />
            </View>
        </CustomView>
    )
}

export default AppBar;