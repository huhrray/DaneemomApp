import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native'
import { Button, RadioButton, TextInput } from 'react-native-paper'
import { mainColor, subColor, subFont, windowHeight, windowWidth } from '../functions/style'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Registration = ({ navigation }: any) => {
    //유저정보
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userPhoto, setUserPhoto] = useState('')
    //애완동물 정보
    const [userPetName, setUserPetName] = useState('')
    const [userPetType, setUserPetType] = useState('')
    const [userPetAge, setUserPetAge] = useState('')
    const [userPetGender, setUserPetGender] = useState('N')
    //가입버튼 로딩 표시
    const [isLoading, setIsLoading] = useState(false)

    const join = () => {
        const userInfo = {
            name: userName,
            email: userEmail,
            Id: userId,
            photo: userPhoto,
            petName: userPetName,
            petType: userPetType,
            petAge: userPetAge,
            petGender: userPetGender,
            visits: 0
        }
        // send the user info to user collection in firestore
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>회원가입</Text>
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 30 }}>
                <TextInput style={styles.registryInput} label='이름' value={userName} outlineColor={mainColor} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} mode={'outlined'} onChangeText={text => setUserName(text)} />
                <TextInput style={styles.registryInput} label={'이메일'} value={userEmail} outlineColor={mainColor} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} mode={'outlined'} onChangeText={text => setUserEmail(text)} />
                <TextInput style={styles.registryInput} label={'아이디'} value={userId} outlineColor={mainColor} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} mode={'outlined'} onChangeText={text => setUserId(text)} />
                <TextInput style={styles.registryInput} label={'비밀번호'} value={userPw} outlineColor={mainColor} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} mode={'outlined'} onChangeText={text => setUserPw(text)} />
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Text style={styles.subTitle}>우리 아이는요...</Text>
                    <Image style={styles.profile} source={require('../assets/defaultDogProfile.png')} />
                </View>
                <TextInput style={styles.registryInput} label={'이름'} value={userPetName} outlineColor={mainColor} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} mode={'outlined'} onChangeText={text => setUserPetName(text)} />
                <TextInput style={styles.registryInput} label={'종'} value={userPetType} outlineColor={mainColor} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} mode={'outlined'} onChangeText={text => setUserPetType(text)} />
                <TextInput style={styles.registryInput} label={'나이'} value={userPetAge} outlineColor={mainColor} theme={{ colors: { primary: mainColor }, fonts: { regular: { fontFamily: subFont } } }} mode={'outlined'} onChangeText={text => setUserPetAge(text)} />
                <View style={styles.genderContainer} >
                    <Text style={styles.genderTitle}>성별</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.genderRadio}>
                            <Icon name='mars' size={20} color={mainColor} />
                            <RadioButton value="M" status={userPetGender === 'M' ? 'checked' : 'unchecked'} color={mainColor} onPress={() => setUserPetGender('M')} />
                        </View>
                        <View style={styles.genderRadio}>
                            <Icon name='venus' size={20} color={mainColor} />
                            <RadioButton value="F" status={userPetGender === 'F' ? 'checked' : 'unchecked'} color={mainColor} onPress={() => setUserPetGender('F')} />
                        </View>
                        <View style={styles.genderRadio}>
                            <Icon name='genderless' size={20} color={mainColor} />
                            <RadioButton value="N" status={userPetGender === 'N' ? 'checked' : 'unchecked'} color={mainColor} onPress={() => setUserPetGender('N')} />
                        </View>
                    </View>
                </View>
                <Button mode='contained' style={[styles.registryInput, { justifyContent: 'center', marginVertical: 10 }]} labelStyle={styles.btnText} loading={isLoading} color={subColor} onPress={() => navigation.push('Home')}>회원가입</Button>

            </View>
        </ScrollView>
    )
}

export default Registration

const styles = StyleSheet.create({
    container: {
    },
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: windowHeight * 0.06,
        borderColor: mainColor,
        borderWidth: 1,
        borderRadius: 5,
    },
    title: {
        fontFamily: subFont,
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10
    },
    subTitle: {
        fontFamily: subFont,
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    genderTitle: {
        fontFamily: subFont,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    registryInput: {
        height: windowHeight * 0.06,
        marginBottom: 10,
    },
    profile: {
        width: windowWidth * 0.35,
        height: windowHeight * 0.15,
        borderRadius: 75,
        backgroundColor: 'white',
        borderColor: mainColor,
        borderWidth: 3,
        resizeMode: 'contain'
    },
    btnText: {
        fontSize: 20,
        fontFamily: subFont
    },
    genderRadio: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})
