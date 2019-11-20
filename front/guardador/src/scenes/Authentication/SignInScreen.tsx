import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { withTheme, Theme } from 'react-native-elements';
import { DefaultProps } from '../../util/defaultProps';
import { routesName } from '../../constants/routesName';
import { SignInTemplate } from '../../components/templates/SignInTemplate';
import { getSignInText } from '../../constants/buttons';
import { getLogoMessage } from '../../constants/labels';
import { react } from '../../assets/images';

interface Props extends DefaultProps {
    theme: Theme<any>
}

const SignInScreenFun = ({ navigation, theme }: Props) => {
    const signInAsync = async () => {
        console.log('signInAsync', routesName.Home);
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate(routesName.Home);
    };

    return (
        <SignInTemplate
            theme={theme}
            buttonTitle={getSignInText()}
            onPress={() => signInAsync()}
            logoTitle={getLogoMessage()}
            logo={react}
        />
    )
}
export const SignInScreen = withTheme(SignInScreenFun);
