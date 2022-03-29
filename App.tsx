import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDatabase } from './hooks/useDatabase';

import { Home } from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Router } from './routes';

export default function App() {
  const [_, { createTable }] = useDatabase();

  createTable();

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1,}}>
        <StatusBar animated translucent={false} style='inverted' />
        <KeyboardAvoidingView style={{flex: 1,}}>
          <Router />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
