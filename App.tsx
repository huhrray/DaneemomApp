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
import Icon from 'react-native-vector-icons/FontAwesome5'
import { mainColor } from './functions/style';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store';

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer)
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
    fontLoad && <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: mainColor,
            },
            headerTitle: '다니맘',
            headerTintColor: '#fff', //Set Header text color
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 30,
              fontFamily: 'Gugi-Regular',
              fontWeight: 'bold', //Set Header text style
            },

            headerBackTitleVisible: false,
            headerRight: (props) => (
              <View style={{ flexDirection: 'row' }}>
                <Icon name='bell' size={20} color={"#fff"} style={{ marginRight: 15 }} onPress={() => { console.log('alarm!') }} />
                <Icon name='sign-out-alt' size={20} color={"#fff"} onPress={() => { console.log('log out!') }} />
              </View>
            ),
          }}
        >
          <Stack.Screen name='First' component={FirstPage}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name='Login' component={LoginScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Registration' component={Registration} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
