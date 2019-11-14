import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { tabBarOptions } from './NavigationOptions';
import { AuthStack } from '../stacks/AuthStack';
import { HomeStack } from '../stacks/HomeStack';
import { AuthLoadingScreen } from '../scenes/Authentication/AuthLoadingScreen';

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack
    },
    {
        tabBarOptions,
    },
);

export default createAppContainer(
    createSwitchNavigator(
        {
            App: TabNavigator,
            Auth: AuthStack,
            AuthLoading: AuthLoadingScreen,
        },
        {
            initialRouteName: 'AuthLoading',
        },
    ),
);
