import React , {useEffect}from 'react'
import {Card, Title} from 'react-native-paper'
import { StyleSheet ,Text, Image, View, FlatList, Dimensions} from 'react-native'
import { SvgXml } from 'react-native-svg'
import star from '../../assets/star'


export const RestaurantCard = ({restaurant}) => {
    const rattingArray = new Array(Math.floor(restaurant.rating)).fill(0)

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>{restaurant.name}</Text>
            <Image
                style = {styles.image} 
                source = {{uri : restaurant.image_url}} />

            <View style = {styles.information}>
                <Text style = {styles.review}>Reviews : {restaurant.review_count}</Text>
                <View style = {styles.rattingContainer}>
                    <Text style = {styles.review}>Rattings</Text>
                    {
                         rattingArray.map((ratting,i) =>(
                            <SvgXml key = {i} style = {styles.star} xml = {star} />
                           ) )
                    }
                </View>
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent: 'space-around',
        marginVertical : 10,
        paddingVertical : 10,
        borderRadius : 5,
        backgroundColor: 'white',
        elevation : 2,
        shadowColor : "#000",
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        shadowOffset : {
            width : 0,
            height : 2
        }

    },
    title : {
        color : "#999396",
        fontSize : 25,
        fontWeight  : "bold",
        paddingHorizontal : 5,

    },
    star : {
        height : 20,
        width : 20
    },
    image : {
        height : (Dimensions.get("window").height)/4.5
    },
    information : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "space-around",
        paddingHorizontal : 5,
    },
    review : {
        color : "#999396",
        fontSize : 18
    },
    rattingContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    }
})
