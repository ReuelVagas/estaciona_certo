import React from 'react';
import { TemplateOrganism } from '../../organisms/TemplateOrganism';
import { Theme } from 'react-native-elements';
import { FeedOrganism } from '../../organisms/FeedOrganism';

interface Props {
    theme: Theme<any>;
    data: string[];
}

export const HomeTemplate = ({ data, theme }: Props) => {

    return (
        <TemplateOrganism theme={theme}>
            <FeedOrganism data={data} />
        </TemplateOrganism>
    );
};
