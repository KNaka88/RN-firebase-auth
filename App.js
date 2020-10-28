import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import firebase from 'firebase';
import config from './firebase-config.json';

export default function App() {
  useEffect(() => {
    firebase.initializeApp(config);
  }, []);

  return (
    <View style={styles.container}>
      <SignUpForm/>
      <SignInForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
