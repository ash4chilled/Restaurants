import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { SvgXml } from 'react-native-svg'

import star from '../../assets/star'
const IMAGE_SIZE = Dimensions.get('window').height/16

export const ReviewBox = ({review}) => {
    const ratingArray = new Array(Math.floor(review.rating)).fill(0)

    return(
        <View style = {styles.container}>
            <View style = {styles.profileView}>
                <Image 
                    style = {styles.profileImage}
                    source = {{uri: review.user.image_url}}
                /> 
                <Text>{review.user.name}</Text>
            </View>
            <View style = {styles.commentSection}>
                <Text style = {styles.comment}>{review.text}</Text>
                <View style = {styles.rating}>
                    <Text>Rattings : </Text>
                        {
                        ratingArray.map((rating,i) =>(
                            <SvgXml key = {i} style = {styles.star} xml = {star} />
                        ))
                    }
                </View>
            </View>

            
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        borderColor : '#999396',
        borderWidth : 0.3,
        marginBottom : 10,
        backgroundColor : 'white',
        flexDirection : 'row',
        padding : 5,
        borderRadius : 5,
    },
    profileView : {
        flex : 0.2,
        alignItems : "center",
        justifyContent : 'center',
    },
    profileImage : {
        height :IMAGE_SIZE,
        width :IMAGE_SIZE,
        borderRadius :IMAGE_SIZE/2,
        borderColor : '#999396',
        borderWidth : 0.5,
    },
    commentSection : {
        flex : 0.8
    },
    comment:{
        fontStyle : 'italic'
    },
    rating : {
        flexDirection : "row",
        paddingTop: 5
    },
    star : {
        height : 20,
        width : 20
    },
})