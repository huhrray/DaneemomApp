import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { bakerySet, chickenSet, duckSet, porkBeefSet, powderSet, seafoodSet, specialMeatSet, veggieSet } from '../DataSet'
import { mainColor, oatmeal, subFont, windowHeight, windowWidth } from '../functions/style'
import { RootState } from '../store'
import { setAddBasket, setRemoveBasket } from '../store/action'

const Shop = () => {
    const { snackType, inBasket } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    //redux 설치해서 prop 받아오기
    const renderData = () => {
        if (snackType === 'item1') {
            return chickenSet
        } else if (snackType === "item2") {
            return duckSet
        } else if (snackType === 'item3') {
            return porkBeefSet
        } else if (snackType === 'item4') {
            return specialMeatSet
        } else if (snackType === 'item5') {
            return seafoodSet
        } else if (snackType === 'item6') {
            return veggieSet
        } else if (snackType === 'item7') {
            return powderSet
        } else if (snackType === 'item8') {
            return bakerySet
        } else {
            return chickenSet
        }
    }
    const renderSnackItem = (item: any) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={item.source} style={styles.image} />
                <View style={styles.cartIcon}>
                    {inBasket.indexOf(item.key) === -1 ?
                        <Icon name="add-shopping-cart" size={20} color={"#fff"} onPress={() => dispatch(setAddBasket(item.key))} />
                        :
                        <Icon name="remove-shopping-cart" size={20} color={"#fff"} onPress={() => dispatch(setRemoveBasket(item.key))} />
                    }
                </View>
                <View style={styles.infoTextContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.infoTextSubContainer}>
                        <Text style={styles.itemSubTitle}>{item.amount}</Text>
                        <Text style={styles.itemSubTitle}>{item.price}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            data={renderData()}
            renderItem={({ item }) => renderSnackItem(item)}
            keyExtractor={(item => item.key)}
            contentContainerStyle={styles.container}
            // columnWrapperStyle={}
            key={"#"}
            numColumns={2}
        />
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        margin: windowWidth * 0.01,
        backgroundColor: oatmeal,
        borderRadius: 10,
        padding: 5
    },
    image: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.2,
        borderRadius: 10,
        margin: 5
    },
    infoTextContainer: {
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    infoTextSubContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontFamily: subFont,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    itemSubTitle: {
        fontFamily: subFont,
        fontSize: 15
    },
    cartIcon: {
        backgroundColor: " rgba(0, 0, 0, .5)",
        position: 'absolute',
        padding: 10,
        borderRadius: 50,
        top: windowHeight * 0.16,
        right: 13

    }
})
