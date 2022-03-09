import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { brightBrown, mainColor, oatmeal, subColor, subFont, windowHeight, windowWidth } from '../functions/style'
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import { carouselData } from '../DataSet'
import DogCounter from '../components/DogCounter';

const Main = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const renderItem = ({ item, index }: any) => {
        return (
            <View style={styles.slide}>
                <Image source={item.source} style={styles.image} />

            </View>
        );
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.adContainer}>
                    <Carousel
                        data={carouselData}
                        renderItem={renderItem}
                        onSnapToItem={(index) => setActiveSlide(index)}
                        sliderWidth={windowWidth}
                        itemWidth={windowWidth}
                    />
                    <Pagination
                        dotsLength={carouselData.length}
                        activeDotIndex={activeSlide}
                        containerStyle={{ position: 'absolute', bottom: 0 }}
                        dotStyle={{
                            width: 7,
                            height: 7,
                            borderRadius: 5,
                            backgroundColor: brightBrown
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
                <DogCounter />
            </View>
        </ScrollView >
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
    },
    adContainer: {
        height: windowHeight * 0.3,
        alignItems: 'center',
    },
    slide: {
        // width: windowWidth,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 5,
        marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
    },
    image: {
        resizeMode: 'stretch',
        width: windowWidth,
        height: windowHeight * 0.3,
    }

})
