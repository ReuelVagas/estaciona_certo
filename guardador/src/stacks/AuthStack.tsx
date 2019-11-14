import { createStackNavigator } from 'react-navigation-stack';
import { routesName } from '../constants/routesName';
import { SignInScreen } from '../scenes/Authentication/SignInScreen';
// import { blue } from '../themes';

// const { defaultNavOptTheme } = blue;
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
