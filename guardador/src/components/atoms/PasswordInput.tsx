import React, { RefObject } from 'react';
import { Input, Theme, Icon } from 'react-native-elements';
import { getPasswordPlaceholder } from '../../constants/placeholders';

interface Props {
    theme: Theme<any>;
    inputRef?: RefObject<Input>;
}

export const PasswordInput = ({ theme, inputRef }: Props) => {
    const { iconTheme, inputContainerTheme, inputTheme } = theme;

    return (
        <Input
            placeholder={getPasswordPlaceholder()}
            returnKeyType="go"
            ref={inputRef}
            leftIcon={
                <Icon
                    name="lock"
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
            secureTextEntry
        />
    );
};
