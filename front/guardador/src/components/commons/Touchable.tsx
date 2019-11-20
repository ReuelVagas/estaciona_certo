import React from 'react';
import {
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
} from 'react-native';

interface Props {
    type?: string;
    [x: string]: any;
}

export const Touchable = ({ type, ...props }: Props) => {
    let ChosenTouchable: any = TouchableOpacity;

    switch (type) {
        case 'native':
            ChosenTouchable =
                Platform.OS === 'ios'
                    ? TouchableWithoutFeedback
                    : TouchableNativeFeedback;
            break;
        case 'highlight':
            ChosenTouchable = TouchableHighlight;
            break;
        case 'nofeedback':
            ChosenTouchable = TouchableWithoutFeedback;
            break;
        default:
            ChosenTouchable = TouchableOpacity;
    }

    return <ChosenTouchable {...props} />;
};
