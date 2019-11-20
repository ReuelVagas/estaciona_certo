import React from 'react';
import { SignInOrganism } from '../../organisms/SignInOrganism';
import { TemplateOrganism } from '../../organisms/TemplateOrganism';
import { Theme } from 'react-native-elements';
import { ImageSourcePropType, StatusBar } from 'react-native';

interface Props {
    theme: Theme<any>;
    onPress: Function;
    buttonTitle: string;
    logoTitle: string;
    logo: ImageSourcePropType;

}

export const SignInTemplate = ({
    theme,
    onPress,
    buttonTitle,
    logoTitle,
    logo
}: Props) => {
    return (
        <TemplateOrganism theme={theme}>
            <SignInOrganism
                theme={theme}
                onPress={onPress}
                buttonTitle={buttonTitle}
                logoTitle={logoTitle}
                logo={logo}
            />
        </TemplateOrganism>
    );
};
