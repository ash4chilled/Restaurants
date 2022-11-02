import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text,
    Image, 
    StyleSheet, 
    FlatList, 
    SafeAreaView, 
    ScrollView,
    StatusBar, 
    Dimensions} from 'react-native'

import yelp from '../api/yelp'
import { Loader } from '../components/Loader'
import { ReviewBox } from '../components/ReviewBox'

export const RestaurantDetailScreen = ({route}) => {
    const restaurant = route.params.restaurant
    const id = restaurant.id
    const space = ' '

    const [result, setResult] = useState(null)
    const [reviews, setReviews] = useState([])
    const [loadingReview, setLoadingReview] = useState(false)

    const getReviews = async(id) => {
        setLoadingReview(true)
        try {
            const reviewResponse = await yelp.get(`/${id}/reviews`)
            setReviews(reviewResponse.data.reviews)
            setLoadingReview(false)
        } catch (error) {
            console.log(error)
            setLoadingReview(false)
        }
    }

    const getResults=async (id)=> {
        try{
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect( ()=> {
        getResults(id)
        getReviews(id)
    },[restaurant])

    if(!result)
        return null

    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>
            <FlatList 
                horizontal
                data = {result.photos}
                keyExtractor={photo => photo}
                renderItem = { ({item}) =>{
                    return <Image 
                            style = {styles.image}
                            source = {{uri: item}}
                            />
                }}
               />

            <Text style = {styles.title}>{result.name}</Text> 
            <Text>{result.location.address1}</Text>
            {
                result.location.address2 ?
                <Text>{result.location.address2}</Text>
                : null
            }
           
            {
                result.location.address3 ? 
                <Text>{result.location.address3}</Text>
                : null
            }
            <Text>
                {result.location.city},{space}  
                {result.location.state},{space}
                {result.location.country},{space}
                {result.location.zip_code}
            </Text>

            <Text style = {styles.reviewTitle}>Reviews</Text>
            {
                loadingReview 
                ? 
                <Loader size = {20} />
                : 
                reviews.map((review, id) => 
                    <ReviewBox review = {review} />
                )
            }
          
        
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical : StatusBar.currentHeight,
        paddingHorizontal : 10,
    },
    title : {
        fontSize : 40,
        color : '#999396',
    },
    image : {
        height : (Dimensions.get("window").height)/4.5,
       
        width : (Dimensions.get("window").width)/1.5,
        marginBottom : 10,
        marginRight : 10,
        borderRadius : 5,
    },
    reviewTitle : {
        fontSize : 30,
        marginBottom : 10,
    },
    imagePan : {
        flexDirection : 'row',
        
    }
})