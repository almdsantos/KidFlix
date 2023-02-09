import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Logo } from '../../components'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text color="black">Seja Bem Vindo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
