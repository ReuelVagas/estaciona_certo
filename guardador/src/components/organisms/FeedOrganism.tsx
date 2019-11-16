import React from 'react';
import { FlatList } from 'react-native';
import { FeedCard } from '../molecules/FeedCard';
import { Colors } from '../../styles/colors';

interface Props {
    data: any;
    [x: string]: any;
}

export const FeedOrganism = ({ data, ...props }: Props) => {
    const baseStyle = {
        // backgroundColor: Colors.black,
    };

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            style={baseStyle}
            renderItem={({ item, index }) => <FeedCard item={item} index={index} />}
        />
    );
};
