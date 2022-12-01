import React from 'react';
import {FlatList, TouchableOpacity, View, Image} from 'react-native';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const YouTubers = () => {
    return (
        <FlatList
            horizontal
            style={styles.flatListContainer}
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({item, index}) => (
                <TouchableOpacity key={index} style={{marginLeft: index == 0 ? 10 : 0, marginRight: 10}}>
                    <View style={styles.oval}>
                        <Image style={styles.capa} source={require('../../assets/brancoala.jpg')} />

                        <Image resizeMode="contain" style={styles.logo} source={require('../../assets/jvToysLogo.png')} />

                        <LinearGradient styles={styles.gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
                    </View>
                </TouchableOpacity>
            )}>
        

        </FlatList>
    )
};

export default YouTubers;