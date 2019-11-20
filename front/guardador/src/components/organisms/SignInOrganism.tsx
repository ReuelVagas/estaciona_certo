import React from 'react';
import { View, ImageSourcePropType, StatusBar } from 'react-native';
import { SignInForm } from '../molecules/SignInForm';
import LogoForm from '../molecules/LogoForm';
import { Theme } from 'react-native-elements';

interface Props {
    theme: Theme<any>;
    onPress: Function;
    buttonTitle: string;
    logoTitle: string;
    logo: ImageSourcePropType;

}

export const SignInOrganism = ({
    theme,
    onPress,
    buttonTitle,
    logoTitle,
    logo
}: Props) => {
    const { signInContainerTheme } = theme;
    return (
        <View style={signInContainerTheme}>
            <LogoForm theme={theme} title={logoTitle} logo={logo} />
            <SignInForm theme={theme} title={buttonTitle} onPress={onPress} />
        </View>
    );
};
