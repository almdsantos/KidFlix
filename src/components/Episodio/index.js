import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { Caption, Title } from 'react-native-paper';

import styles from './styles';

const Episodio = () => {
    return (
        <>
            <TouchableOpacity styles={styles.container}>
                <View style={styles.text}>
                    <Image
                    style={styles.capa}
                    source={require('../../assets/paw-patrol-capa.jpg')}
                    />
                    <View >
                      <Title style={{color: '#fff', fontSize: 15,}}>1. Nome do Episódio</Title>
                      <Caption style={{color: '#fff'}}>45 Mins.</Caption>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
};

export default Episodio;