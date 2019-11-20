import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { Theme, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { EmailInput } from '../atoms/EmailInput';
import { PasswordInput } from '../atoms/PasswordInput';
import { SimpleButton } from '../atoms/SimpleButton';

interface Props {
    theme: Theme<any>;
    onPress: Function;
    title: string;
}

const SignInFormConst = ({
    theme,
    onPress,
    title
}: Props) => {
    const passwordRef = useRef<Input>(null);
    const { formContainerTheme } = theme;
    return (
        <View style={formContainerTheme}>
            <EmailInput
                theme={theme}
                onSubmitEditingProps={() => passwordRef && passwordRef.current && passwordRef.current.focus()}
            />
            <PasswordInput
                theme={theme}
                inputRef={passwordRef}
            />
            <SimpleButton theme={theme} title={title} onPressProps={onPress} />
        </View>
    );
}

export const SignInForm = withNavigation(SignInFormConst);
