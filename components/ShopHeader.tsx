import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { shopCategory } from '../DataSet'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { mainColor, subFont, windowHeight } from '../functions/style'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackCategory } from '../store/action'
import { RootState } from '../store'

const ShopHeader = ({ navigation }: any) => {
    const { snackType } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity style={[styles.categoryTitleContainer, item.key === snackType && styles.categoryIndicator]} onPress={() => dispatch(setSnackCategory(item.key))}>
                <Text style={styles.categoryTitleText}>{item.title}</Text>
            </TouchableOpacity>
        )

    }
    return (
        <FlatList
            data={shopCategory}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item => item.key)}
            horizontal={true}
            contentContainerStyle={styles.container}
            style={{ backgroundColor: mainColor }}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default ShopHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: mainColor,
        height: windowHeight * 0.06,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryTitleContainer: {
        padding: 10,
        width: 120,
        alignItems: 'center',
    },
    categoryTitleText: {
        // resizeMode: 'contain',
        color: "#fff",
        fontFamily: subFont,
    },
    categoryIndicator: {
        bottom: 0,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: 120,
    }

})