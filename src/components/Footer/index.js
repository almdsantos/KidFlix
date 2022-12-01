import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {Button} from 'react-native-paper';

const Footer = () => {
    return (
        <LinearGradient style={styles.header} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}>
          <View>
            <View style={styles.menuHeader}>

                <TouchableOpacity>
                    <Icon name="plus" color="white" size={20}/>
                    <Text style={styles.textButton}>Minha Lista</Text>
                </TouchableOpacity>
                <Button style={styles.button} icon="play" mode="contained" color="#000000">Assistir</Button>
                <TouchableOpacity>
                    <Icon name="information-outline" color="#fff" size={20}/>
                    <Text style={styles.textButton}>Saiba Mais</Text>
                </TouchableOpacity>
            </View>
          </View>      
        </LinearGradient>
    );
};

export default Footer;