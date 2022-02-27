
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'

export default function LoginScreen({ navigation }: any) {
  return (
    <View>
      
    <Text>login</Text>
    <Button mode='outlined' onPress={()=> navigation.push('Registration')}>회원가입</Button>
      
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
