import React, {useState, useEffect, useContext} from 'react'
import {Text, 
        StyleSheet, 
        FlatList, 
        Pressable,
        ActivityIndicator} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import { SearchBar } from '../components/SearchBar'
import {RestaurantCard} from '../components/RestaurantCard'
import { RestaurantContext } from '../contexts/RestaurantContext'
import { Loader } from '../components/Loader'

export const RestaurantsScreen = ({navigation}) => {

    const {results, searchApi,loading, setCity, setTerm} = useContext(RestaurantContext) 


    return(
        <SafeAreaView style = {styles.container}>
            <SearchBar 
                placeholderText = 'Search Food..'
                onInputChange = { (text) => setTerm(text)}
                onInputSubmit = {(text) => searchApi()}
                />
            <SearchBar 
                placeholderText = 'Enter City'
                onInputChange={ (text) => setCity(text)}
                onInputSubmit = {(text) => searchApi()}
            />
            {/* <Text>We have got {results.length} restaurants</Text> */}
            {
                loading 
                ? 
                <Loader size = {40} /> 
                :
                <FlatList 
                data = {results}
                renderItem = {({item}) => 
                    <Pressable onPress = {()=> navigation.navigate('RestaurantDetail', {restaurant : item})}>
                         <RestaurantCard restaurant = {item} />
                    </Pressable>
                }   
                keyExtractor = {result=> result.id}
                showsVerticalScrollIndicator = {false} />
            }
           
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        margin : 20,
        flex : 1
    },
})