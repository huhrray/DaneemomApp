import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, Image } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const Registration = ({ navigation }: any) => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userPhoto, setUserPhoto] = useState('')

    const [userPetName, setUserPetName] = useState('')
    const [userPetType, setUserPetType] = useState('')
    const [userPetAge, setUserPetAge] = useState('')
    const [userPetGender, setUserPetGender] = useState('M')

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
        <ScrollView>
            <Text>Registration</Text>
            <TextInput label='이름' value={userName} onChangeText={text => setUserName(text)} />
            <TextInput label={'이메일'} value={userEmail} onChangeText={text => setUserEmail(text)} />
            <TextInput label={'ID'} value={userId} onChangeText={text => setUserId(text)} />
            <TextInput label={'비밀번호'} value={userPw} onChangeText={text => setUserPw(text)} />
            <Text>애완동물의 정보를 알려주세요</Text>
            <Image source={{ uri: '' }} />
            <TextInput label={'애완동물 이름'} value={userPetName} onChangeText={text => setUserPetName(text)} />
            <TextInput label={'종'} value={userPetType} onChangeText={text => setUserPetType(text)} />
            <TextInput label={'나이'} value={userPetAge} onChangeText={text => setUserPetAge(text)} />
            <TextInput label={'성별'} value={userPetGender} onChangeText={text => setUserPetGender(text)} />
            <Button mode='outlined' onPress={() => navigation.push('Home')}>홈으로</Button>
        </ScrollView>
    )
}

export default Registration

const styles = StyleSheet.create({})
