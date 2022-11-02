import React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native'

export const Loader = ({size}) => {
    return(
        <ActivityIndicator 
            style = {styles.container} 
            size = {size} 
            color = '#999396' />
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})