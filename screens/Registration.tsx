import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-paper'

const Registration = ({ navigation }: any) => {
    return (
        <View>
            <Text>Registration</Text>
            <Button mode='outlined' onPress={()=> navigation.push('Home')}>홈으로</Button>
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({})
