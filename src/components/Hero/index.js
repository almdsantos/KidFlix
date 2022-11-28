import React from 'react';
import {ImageBackground, View} from 'react-native';


import styles from './styles';

const Hero = () => {
    return(
        <ImageBackground style={styles.hero} source={require('../../assets/paw-patrol.png')}>
     
        </ImageBackground>
    )
};

export default Hero;