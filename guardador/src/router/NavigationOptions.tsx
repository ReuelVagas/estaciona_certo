import React from 'react';
import { Image } from 'react-native';
import { routesName } from '../constants/routesName';
import { home, settings } from '../assets/images';
import { DefaultProps } from '../util/defaultProps';

interface Props extends DefaultProps {
}

interface TabIcon {
    horizontal: boolean;
    tintColor?: string;
}


const createTabNavigationOptions = ({ navigation }: Props) => ({
    tabBarIcon: ({ horizontal, tintColor }: TabIcon) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
            case routesName.Home:
                iconName = home;
                break;
            case routesName.Settings:
                iconName = settings;
                break;
            default:
                iconName = home;
                break;
        }

        const style = {
            width: horizontal ? 20 : 25,
            aspectRatio: 1,
            tintColor
        };

        return (
            <Image
                style={style}
                resizeMode="contain"
                source={iconName}
            />
        );
    },
});

export const tabBarOptions = {
    activeTintColor: '#3498db',
    inactiveTintColor: '#888888',
    gesturesEnabled: false,
    style: {
        backgroundColor: '#f5f5f5',
    },
};
export const navigationOptions = createTabNavigationOptions;