import React from 'react';
import { View, Image, Text } from 'react-native';
// import Button from '../../atoms/Button';
import { Touchable } from '../commons/Touchable';
import { fontSize } from '../../styles/fonts';
import { marginSize, paddingSize } from '../../styles/metrics';
import { Colors } from '../../styles/colors';
import { Icon } from 'react-native-elements';

const localStyle = {
    baseStyle: {
        alignItems: 'center',
        paddingHorizontal: paddingSize.large,
        paddingVertical: paddingSize.normal
    },
    shadowStyle: {
        shadowColor: Colors.black,
        shadowRadius: 3,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        elevation: 2,
        width: '100%',
    },
    newsContainerStyle: {
        backgroundColor: Colors.white,
        borderRadius: 3,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    label: {
        fontSize: fontSize.label,
        color: '#333'
    },
    placa: {
        fontSize: fontSize.h1,
        color: '#333'
    },
    subtitulo: {
        fontSize: fontSize.h2,
        color: '#333'
    },
    newsInfoContainerStyle: {
        padding: paddingSize.normal,
        paddingBottom: 0
    },
    maisInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    maisInforow: {
        padding: paddingSize.normal,
    },
    iconTheme: {
        iconStyle: {
            color: Colors.black,
            opacity: 0.8,
        },
        size: 24,
        resizeMode: 'contain',
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: paddingSize.normal
    },
    vencido: {
        opacity: 0.6
    }
};

interface Props {

    [x: string]: any;
}

export const FeedCard = ({
    item,
    style,
    onNewsPress,
}: Props) => {

    const newStyle = Object.assign({}, localStyle, style);

    const {
        baseStyle,
        shadowStyle,
        newsContainerStyle,
        newsInfoContainerStyle,
        label,
        placa,
        subtitulo,
        maisInfo,
        maisInforow,
        iconTheme,
        iconBox,
        vencido
    } = newStyle;

    let labelFinal = label;
    let tituloFinal = placa;
    let subTituloFinal = subtitulo;
    let iconStyleFinal = iconTheme.iconStyle;
    let baseStyleFinal = baseStyle
    if (item.vencido) {
        baseStyleFinal = { ...baseStyle, ...vencido };
        // labelFinal = { ...label, ...vencidoColor };
        // tituloFinal = { ...placa, ...vencidoColor };
        // subTituloFinal = { ...subtitulo, ...vencidoColor };
        // iconStyleFinal = { ...iconTheme.iconStyle, ...vencidoColor };
    }

    return (
        <View style={baseStyleFinal}>
            <View style={shadowStyle}>
                <Touchable onPress={onNewsPress}>
                    <View style={newsContainerStyle}>
                        <View style={iconBox}>
                            <Icon
                                name="directions-car"
                                iconStyle={iconStyleFinal}
                                size={48}
                            />
                        </View>
                        <View>
                            <View style={newsInfoContainerStyle}>
                                <Text style={labelFinal} numberOfLines={1}>
                                    Placa
                                </Text>
                                <Text style={tituloFinal} numberOfLines={1}>
                                    {item.placa}
                                </Text>
                            </View>
                            <View style={maisInfo}>
                                <View style={maisInforow}>
                                    <Text style={labelFinal} numberOfLines={1}>
                                        Periodo
                                    </Text>
                                    <Text style={subTituloFinal} numberOfLines={1}>
                                        {item.periodo}
                                    </Text>
                                </View>
                                <View style={maisInforow}>
                                    <Text style={labelFinal} numberOfLines={1}>
                                        Inicio
                                    </Text>
                                    <Text style={subTituloFinal} numberOfLines={1}>
                                        {new Date(item.datainico).toDateString()}
                                    </Text>
                                </View>
                                <View style={maisInforow}>
                                    <Text style={labelFinal} numberOfLines={1}>
                                        Fim
                                    </Text>
                                    <Text style={subTituloFinal} numberOfLines={1}>
                                        {item.datainico}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Touchable>
            </View>
        </View>
    );
};
