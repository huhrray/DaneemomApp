import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { brightBrown, mainColor, oatmeal, subFont, windowHeight } from '../functions/style'

const DogCounter = () => {
    const [counter, setCounter] = useState({ small: 0, medium: 0, big: 0 })
    //사용자 개 정보 가져오기 
    const userInfo = { name: "강아징", size: 'small', gender: 'N' }
    const [isEnter, setIsEnter] = useState(false)

    const enterRoofTop = () => {
        if (isEnter) {
            if (userInfo.size === 'small') {
                setCounter(prev => { return { small: prev.small - 1, medium: prev.medium, big: prev.big } })
            } else if (userInfo.size === 'medium') {
                setCounter(prev => { return { small: prev.small, medium: prev.medium - 1, big: prev.big } })
            } else {
                setCounter(prev => { return { small: prev.small, medium: prev.medium, big: prev.big - 1 } })
            }
            setIsEnter(false)
        } else {
            if (userInfo.size === 'small') {
                setCounter(prev => { return { small: prev.small + 1, medium: prev.medium, big: prev.big } })
            } else if (userInfo.size === 'medium') {
                setCounter(prev => { return { small: prev.small, medium: prev.medium + 1, big: prev.big } })
            } else {
                setCounter(prev => { return { small: prev.small, medium: prev.medium, big: prev.big + 1 } })
            }
            setIsEnter(true)
        }

    }

    return (
        <View>
            <View style={styles.counterContianer}>
                <Text style={styles.subTitle}>지금 옥상 운동장엔...?</Text>
                <View style={styles.counterSubContainer}>
                    <View style={styles.sizeContainer}>
                        {/* <Text style={[styles.counterTitle, { fontWeight: 'bold' }]}>🐶</Text> */}
                        <Text style={styles.counterTitle}>{counter.small}</Text>
                        <Text style={[styles.counterTitle, { fontWeight: 'bold' }]}>소형견</Text>
                    </View>
                    <View style={styles.sizeContainer}>
                        {/* <Text style={[styles.counterTitle, { fontWeight: 'bold' }]}>🐕</Text> */}
                        <Text style={styles.counterTitle}>{counter.medium}</Text>
                        <Text style={[styles.counterTitle, { fontWeight: 'bold' }]}>중형견</Text>
                    </View>
                    <View style={styles.sizeContainer}>
                        {/* <Text style={[styles.counterTitle, { fontWeight: 'bold' }]}>🐩</Text> */}
                        <Text style={styles.counterTitle}>{counter.big}</Text>
                        <Text style={[styles.counterTitle, { fontWeight: 'bold' }]}>대형견</Text>
                    </View>
                </View>
            </View>
            <View style={styles.enterBtnContainer}>
                <TouchableOpacity onPress={enterRoofTop} >
                    <Icon name={isEnter ? 'shoe-prints' : 'paw'} size={30} color={brightBrown} style={styles.enterBtn} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DogCounter

const styles = StyleSheet.create({
    counterContianer: {
        // marginHorizontal: 10,
        height: windowHeight * 0.2,
        justifyContent: 'space-between',
        // alignItems: 'stretch',
        borderColor: mainColor,
        borderWidth: 1,

    },
    counterSubContainer: {
        flexDirection: 'row',
        height: "70%",
        justifyContent: 'space-around',
        alignContent: 'center'

    },
    enterBtnContainer: {
        position: 'absolute',
        top: 0,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: oatmeal,
        borderColor: brightBrown,
        borderWidth: 5,
    },

    sizeContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: subFont,
        fontSize: 30,
        color: mainColor
    },
    subTitle: {
        fontFamily: subFont,
        fontSize: 20,
        backgroundColor: mainColor,
        color: "#fff",
        paddingVertical: 10,
        textAlign: 'center'
    },
    counterTitle: {
        fontSize: 20,
        fontFamily: subFont
    },
    enterBtn: {
        padding: 20,
        justifyContent: 'center',

    },

})