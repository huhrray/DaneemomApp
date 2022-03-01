import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import FirstPage from './screens/FirstPage';
import Registration from './screens/Registration';
import Home from './screens/Home';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoad, setFontLoad] = useState(false)

  // font 불러오기
  useEffect(() => {
    const Load = async () => {
      await Font.loadAsync({
        'Gugi-Regular': require('./assets/fonts/Gugi-Regular.ttf'),
        'GowunDodum-Regular': require('./assets/fonts/GowunDodum-Regular.ttf')
      })
      setFontLoad(true)
    }
    Load()
  }, [])

  return (
    fontLoad &&
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='First' component={FirstPage} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
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
