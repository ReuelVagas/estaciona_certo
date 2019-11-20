import React from 'react';
import { Input, Icon, Theme } from 'react-native-elements';
import { getEmailPlaceholder } from '../../constants/placeholders';

interface Props {
    theme: Theme<any>;
    onSubmitEditingProps?: any;
}

export const EmailInput = ({ theme, onSubmitEditingProps }: Props) => {
    const { iconTheme, inputContainerTheme, inputTheme } = theme;

    return (
        <Input
            placeholder={getEmailPlaceholder()}
            returnKeyType="next"
            onSubmitEditing={onSubmitEditingProps}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            leftIcon={
                <Icon
                    name="mail"
                    iconStyle={iconTheme.iconStyle}
                    type={iconTheme.type}
                    size={iconTheme.size}
                />
            }
            containerStyle={inputTheme}
            inputContainerStyle={inputContainerTheme.inputContainerStyle}
            inputStyle={inputContainerTheme.inputStyle}
            placeholderTextColor={inputContainerTheme.placeholderTextColor}
        // shake
        />
    );
};

