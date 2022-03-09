import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import Shop from './Shop';
import Community from './Community';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { mainColor, subColor } from '../functions/style';
import MyPage from './MyPage';
import ShopHeader from '../components/ShopHeader';

const Tab = createBottomTabNavigator();


const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        headerShown: false,
        header: (props) => <ShopHeader {...props} />,
        tabBarStyle: { backgroundColor: subColor },
        tabBarActiveTintColor: mainColor,
        tabBarLabel: () => {
          let label = ""
          if (route.name === "Main") {
            label = "홈"
          } else if (route.name === 'Shop') {
            label = "간식마켓"
          } else if (route.name === "Community") {
            label = "커뮤니티"
          } else if (route.name === "MyPage") {
            label = "마이페이지"
          }
          return <Text style={{ fontFamily: 'GowunDodum-Regular', fontSize: 10 }}>{label}</Text>
        },
        tabBarIcon: (({ color, size }) => {
          let iconName: string = ""
          if (route.name === "Main") {
            iconName = "home"
          } else if (route.name === "Shop") {
            iconName = 'shopping-basket'
          } else if (route.name === "Community") {
            iconName = "users"
          } else if (route.name === "MyPage") {
            iconName = "user-circle"
          }
          return (
            <Icon
              name={iconName}
              color={color}
              size={22}
              style={{ marginTop: 10 }}
            />
          );
        })
      })}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Shop" component={Shop}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: mainColor }
        }}

      />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})
