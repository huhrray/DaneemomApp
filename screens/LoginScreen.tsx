
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { mainColor, subFont, windowHeight } from '../functions/style';

export default function LoginScreen({ navigation }: any) {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>

        <Icon name="dog" size={50} color={'#fff'} />
        <Text style={styles.logoText}>다니맘</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.loginInput} mode='outlined' label={'아이디'} value={userId} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} onChangeText={(text) => setUserId(text)} />
        <TextInput style={styles.loginInput} mode='outlined' label={'비밀번호'} value={userPw} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} onChangeText={(text) => setUserPw(text)} />
        <Button style={[styles.loginInput, { justifyContent: 'center', marginTop: 10 }]} labelStyle={styles.btnText} loading={loading} mode='contained' color={'#847269'} onPress={() => navigation.push('Home')}>로그인</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
    // alignItems: 'center',
    justifyContent: 'center',

  },
  logoContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    color: "#fff",
    fontSize: 45,
    fontFamily: 'Gugi-Regular',
    marginTop: 10,
    marginBottom: 20
  },
  loginInput: {
    height: windowHeight * 0.07,
    marginTop: 5
  },
  inputContainer: {
    marginHorizontal: 30,
  },
  btnText: {
    fontSize: 20,
    color: mainColor
  }
});
