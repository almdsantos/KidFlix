import React from 'react';
import {Text, Image, View} from 'react-native';
import {Button} from 'react-native-paper';

import styles from './styles';

const Login = () => {
    return (
        <>
          <View style={styles.bgYellow}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
           <View>
            <Button
                mode="React.ReactNode" 
                style={styles.botao}
                onPress={() => console.log('Pressed')}>
                <Text style={styles.textBottom}>Entrar</Text>
            </Button>
           </View>
          </View>
        </>
    );
};

export default Login;