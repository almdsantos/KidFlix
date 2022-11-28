import React from 'react';


import { Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {Title} from 'react-native-paper';
import styles from './styles';

const Secao = ({hasTopBorder}) => {
    return (
        <View style={styles.container}>

            {hasTopBorder && <View style={styles.borderTop} />}

            <Title style={styles.secaoTitle}>Nome da Seção</Title>

            <FlatList
            style={styles.lista}
            horizontal
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item, index }) => (
                <TouchableOpacity key={index}>
                    <ImageBackground 
                    style={[styles.capa, {marginRight: 10, marginLeft: index == 0 ? 10 : 0}]}
                    source={{uri: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tfHUfTypfDVW6100rRsVXwJnu0H.jpg'}}>
                    </ImageBackground>
                </TouchableOpacity>
            )}>

            </FlatList>
        </View>
    );
};

export default Secao;