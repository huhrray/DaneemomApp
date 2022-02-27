import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { Button } from 'react-native-paper'

const FirstPage = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/Logo_Daneemom2.png")} style={styles.logoImg}/>
            <Button mode='outlined' onPress={()=> navigation.push('Login')}>로그인</Button>
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logoImg:{
        width:"100%",
        height:"100%"
    }
})
