import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Theme } from 'react-native-elements';

interface Props {
    theme: Theme<any>;
    logo: ImageSourcePropType;
    title: string;
}

const LogoForm = ({ theme, title, logo }: Props) => {
    const { logoTheme, logoContainerTheme, logoTextTheme } = theme;
    return (
        <View style={logoContainerTheme}>
            <Image style={logoTheme} source={logo} />
            <Text style={logoTextTheme}>{title}</Text>
        </View>
    );
};
export default LogoForm;
