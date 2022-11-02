import React from 'react'
import {TextInput, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const SearchBar = ({onInputSubmit, onInputChange, placeholderText}) => {

    return(
        <View style = {styles.container}>
            <Icon name = "search-outline" size={20} color="#717171" /> 
            <TextInput
                placeholder={placeholderText}
                onChangeText = {onInputChange }
                onSubmitEditing = {onInputSubmit}
                style = {styles.textInput} />
        </View>
        
    )
}


const styles = StyleSheet.create({
    textInput : {
        fontSize : 20,
        color : "#999396",
        paddingHorizontal : 10
    },
    container : {
        flexDirection : "row",
        borderColor : '#999396',
        borderWidth : 0.2,
        borderRadius : 2,
        alignItems : "center",
        padding : 5,
        marginBottom : 10,
        backgroundColor : 'white',
    }
})

