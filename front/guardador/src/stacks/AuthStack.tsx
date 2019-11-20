import { createStackNavigator } from 'react-navigation-stack';
import { routesName } from '../constants/routesName';
import { SignInScreen } from '../scenes/Authentication/SignInScreen';
// import { estaciona } from '../themes';

// const { defaultNavOptTheme } = estaciona;
export const AuthStack = createStackNavigator(
    {
        SignIn: {
            screen: SignInScreen,
            navigationOptions: {
                header: null,
            }
        },
    },
    {
        initialRouteName: routesName.SignIn,
        // defaultNavigationOptions: defaultNavOptTheme,
    },
);
