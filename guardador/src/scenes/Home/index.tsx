import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTheme, Theme } from 'react-native-elements';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import { DefaultProps } from '../../util/defaultProps';
import { View, ActivityIndicator } from 'react-native';
// import homeFetch from '../../store/actions/HomeActions';

interface Props extends DefaultProps {
    theme: Theme<any>
}

export const HomeScreen = ({ theme }: Props) => {
    const data: string[] = ['teste', 'teste'];

    return <View><ActivityIndicator /></View>;
}