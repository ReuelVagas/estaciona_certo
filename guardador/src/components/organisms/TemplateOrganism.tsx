import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Theme } from 'react-native-elements';

interface Props {
    theme: Theme<any>;
    children: ReactNode;
    hiddenStatusBas?: boolean;

}

export const TemplateOrganism = ({ children, theme }: Props) => {
    const { safeAreaTheme, keyboardViewTheme, statusBarTheme } = theme;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? undefined : 'padding'}
            style={keyboardViewTheme}>
            <SafeAreaView style={safeAreaTheme}>
                <StatusBar barStyle={statusBarTheme.barStyle} />
                {children}
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};
