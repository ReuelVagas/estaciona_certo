import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { DefaultProps } from '../../util/defaultProps';
import { routesName } from '../../constants/routesName';

interface Props extends DefaultProps {
}

export const AuthLoadingScreen = ({ navigation }: Props) => {

    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        navigation.navigate(userToken ? routesName.App : routesName.Auth);
    };

    useEffect(() => {
        bootstrapAsync();
    }, []);

    return (
        <View>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
}
