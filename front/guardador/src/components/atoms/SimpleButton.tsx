import React from 'react';
import { Button, Theme } from 'react-native-elements';

interface Props {
    theme: Theme<any>;
    title?: string;
    onPressProps?: any;
}

export const SimpleButton = ({ theme, title, onPressProps }: Props) => {
    const { buttonTheme, buttonContainerTheme, buttonTitleTheme } = theme;

    return (
        <Button
            title={title}
            onPress={onPressProps}
            raised={buttonTheme.raised}
            titleStyle={buttonTitleTheme}
            buttonStyle={buttonTheme}
            type={buttonTheme.type}
            containerStyle={buttonContainerTheme}
        />
    );
};
