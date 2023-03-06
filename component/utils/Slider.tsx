import React, { FC, useRef } from 'react';
import {
    ScrollView,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
} from 'react-native';
import {normalDot, card, indicatorContainer, scrollContainer, sliderimage } from '../../style/Slider';
export interface sliderprops{
    images:{
        id: number,
        url: string,
    }[]
}

const Slider:FC<sliderprops> = ({images}) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();

    return (
        <View style={scrollContainer}>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX,
                            },
                        },

                    },
                ], { useNativeDriver: false })}
                scrollEventThrottle={1}>
                {images.map((image, imageIndex) => {
                    return (
                        <View style={sliderimage(windowWidth) } key={imageIndex}>
                            <ImageBackground source={{ uri: image.url }} style={card}>
                            </ImageBackground>
                        </View>
                    );
                })}
            </ScrollView>
            <View style={indicatorContainer}>
                {images.map((image, imageIndex) => {
                    const width = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (imageIndex - 1),
                            windowWidth * imageIndex,
                            windowWidth * (imageIndex + 1),
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View
                            key={imageIndex}
                            style={[normalDot, { width }]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default Slider;