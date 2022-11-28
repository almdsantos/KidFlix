import React from 'react';
import {View, ScrollView} from 'react-native';

import styles from './styles';
import {Title} from 'react-native-paper'; 


import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import YouTubers from '../../components/YouTubers'
import Secao from '../../components/Secao'


const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <Footer />
            <Hero />
            
            <View style={styles.previaContainer}>
                <Title style={styles.previaTitle}>YouTubers</Title>
                <YouTubers />
            </View>

            {[1,2,3,4].map((secao, index) => (<Secao key={index} />))}
        </ScrollView>
    );  
};

export default Home;