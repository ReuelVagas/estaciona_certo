import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withTheme, Theme } from 'react-native-elements';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import { DefaultProps } from '../../util/defaultProps';
// import homeFetch from '../../store/actions/HomeActions';

interface Props extends DefaultProps {
    theme: Theme<any>
}

const HomeScreenFun = ({ theme }: Props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState();

    const buscaTaloesDoDia = useCallback(
        async () => {
            const result = ['rete', 'radas'];
            setData(result);
        }, []
    );

    useEffect(() => {

    },[]);

    return <HomeTemplate theme={theme} data={data} />;
}

export const HomeScreen = withTheme(HomeScreenFun);