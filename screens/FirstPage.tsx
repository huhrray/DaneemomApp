import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DefaultText from '../components/DefaultText'
import { screenHeight, screenWidth } from '../functions/style'


const FirstPage = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            {/* <Image source={require("../assets/Logo_Daneemom2.png")} style={styles.logoImg} /> */}
            <DefaultText children={'다니맘'} style={styles.title} fontFam={"Gugi-Regular"} />
            <DefaultText children="애견 수제간식 전문점" style={styles.subTitle} fontFam={'GowunDodum-Regular'} />
            <TouchableOpacity onPress={() => navigation.push('Login')}><DefaultText children="로그인" style={styles.btnText} fontFam={'GowunDodum-Regular'} /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Registration')}><DefaultText children="회원가입" style={styles.btnText} fontFam={'GowunDodum-Regular'} /></TouchableOpacity>
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5b473c',
    },
    title: {
        fontSize: 100,
        color: '#c1b9b4',
    },
    subTitle: {
        fontSize: 20,
        color: '#847269',
        marginBottom: 20
    },
    btnText: {
        fontSize: 17,
        marginBottom: 5
    }
})
