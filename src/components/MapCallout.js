import React from 'react'
import { Image, Platform, StyleSheet, Text , View} from 'react-native'
import {WebView} from 'react-native-webview'

export const MapCallout = ({restaurant}) => {

    const isAndroid = Platform.OS === 'android'
    
    const CompactRestaurantInfo = ({restaurant, isMap}) => {
       
        return(
            <View style = {styles.container} >
                {
                    (isAndroid)
                    ?
                    <WebView style = {styles.thumbnail} source = {{uri : restaurant.image_url}} />
                    :
                    <Image style = {styles.thumbnail} source = {{uri : restaurant.image_url}} />
                }
               
                <Text>{restaurant.name}</Text>
            </View>
        )
    }

    return(
        <CompactRestaurantInfo isMap restaurant = {restaurant} /> 
    )
}

const styles = StyleSheet.create({
    thumbnail : {
        width : 120,
        height : 100,
        borderRadius : 10
    },
    container : {
        maxWidth : 120,
        padding : 10,
        alignItems : 'center',
        borderRadius : 10
    }
})