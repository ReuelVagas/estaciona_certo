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
            const result = [
                {
                    "id": "1",
                    "datainico": "2019-11-10T20:05:00",
                    "periodo": "2h",
                    "placa": "FP5T71Q",
                    "vencido": false,
                    "tipoveiculo": 1
                },
                {
                    "id": "2",
                    "datainico": "2019-11-10T20:00:00",
                    "periodo": "2h",
                    "placa": "X41BCZ7",
                    "vencido": false,
                    "tipoveiculo": 1
                },
                {
                    "id": "3",
                    "datainico": "2019-11-10T10:00:00",
                    "periodo": "10h",
                    "placa": "3CB58OK",
                    "vencido": true,
                    "tipoveiculo": 1
                },
                {
                    "id": "4",
                    "datainico": "2019-11-10T10:00:00",
                    "periodo": "8h",
                    "placa": "26YWOR4",
                    "vencido": true,
                    "tipoveiculo": 2
                },
                {
                    "id": "5",
                    "datainico": "2019-11-10T10:00:00",
                    "periodo": "6h",
                    "placa": "MS109KB",
                    "vencido": true,
                    "tipoveiculo": 2
                },
                {
                    "id": "6",
                    "datainico": "2019-11-10T10:00:00",
                    "periodo": "4h",
                    "placa": "I001DKV",
                    "vencido": true,
                    "tipoveiculo": 3
                }
            ];
            setData(result);
        }, []
    );

    useEffect(() => {
        buscaTaloesDoDia();
    }, []);

    return <HomeTemplate theme={theme} data={data} />;
}

export const HomeScreen = withTheme(HomeScreenFun);