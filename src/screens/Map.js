import React, { useContext, useState } from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import MapView from 'react-native-maps'

import { RestaurantContext } from '../contexts/RestaurantContext'
import { MapCallout } from '../components/MapCallout'
import { SearchBar } from '../components/SearchBar'
import { Loader } from '../components/Loader'

export const MapScreen = ({navigation}) => {
    const {results, region, searchApi, loading, setCity, setTerm} = useContext(RestaurantContext)



    return(
        <>
        <View style = {styles.searchContainer}>
            <SearchBar 
                placeholderText= 'Search Food'
                onInputChange={(text) => setTerm(text)} 
                onInputSubmit = {(text) => searchApi()} />

            <SearchBar 
                placeholderText= 'Search City' 
                onInputChange={ (text) => setCity(text)}
                onInputSubmit = {(text) => searchApi()} />
        </View>

       
       {
        loading ? 
        <Loader size = {40} />
        :
        <MapView 
        style = {styles.container}
        region = {{
            latitude: region.center.latitude,
            longitude: region.center.longitude,
            latitudeDelta : 0,
            longitudeDelta : 0.02
        }}>
            {
                 results.map( (result) => {
                    return (
                        <MapView.Marker 
                            key = {result.id}
                            title = {result.name}
                            coordinate = {{
                                latitude: result.coordinates.latitude,
                                longitude: result.coordinates.longitude,
                            }}
                        >
                            <MapView.Callout
                                onPress = {
                                    ()=> navigation.navigate('RestaurantDetail',{
                                       restaurant : result
                                    })
                                } >
                                    <MapCallout restaurant={result} />
                            </MapView.Callout>
                        </MapView.Marker>
                    )
                })
            }
       

    </MapView>
       }
       
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        
        width  : Dimensions.get("window").width,
        height : Dimensions.get("window").height,
        flex : 1,
        zIndex : 0
    },
    searchContainer : {
        position : 'absolute',
        top : 50,
        width : Dimensions.get("window").width-30,
        zIndex : 1,
        alignSelf : 'center',
        paddingVertical : 0,
    }
})
