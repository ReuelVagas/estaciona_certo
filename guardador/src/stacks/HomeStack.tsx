import { createStackNavigator } from 'react-navigation-stack';
import { routesName } from '../constants/routesName';
import { HomeScreen } from '../scenes/Home';
// import { DetailsScreen } from '../scenes/Details';
import { estaciona } from '../themes';
import { navigationOptions } from '../router/NavigationOptions';

const { defaultNavOptTheme } = estaciona;

export const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        initialRouteName: routesName.Home,
        navigationOptions,
        defaultNavigationOptions: {
            headerStyle: defaultNavOptTheme.headerStyle,
            headerTintColor: defaultNavOptTheme.headerTintColor,
            // headerTitleStyle: defaultNavOptTheme.headerTitleStyle,
        },
    }
);
