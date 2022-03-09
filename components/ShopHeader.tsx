import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { shopCategory } from '../DataSet'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { mainColor, subFont, windowHeight, windowWidth } from '../functions/style'

const ShopHeader = ({ navigation }: any) => {
    const [isSelected, setIsSelected] = useState('item1')
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity style={styles.categoryTitleContainer} onPress={() => setIsSelected(item.key)}>
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
            ItemSeparatorComponent={({ leadingItem }) => leadingItem.key === isSelected ? (
                <View style={{ backgroundColor: "#fff", bottom: 0, height: 1, width: 120, position: 'absolute' }} />
            ) : null}
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
        alignItems: 'center'
    },
    categoryTitleContainer: {
        padding: 10,
        width: 120,
        alignItems: 'center'
    },
    categoryTitleText: {
        // resizeMode: 'contain',
        color: "#fff",
        fontFamily: subFont,
    }

})