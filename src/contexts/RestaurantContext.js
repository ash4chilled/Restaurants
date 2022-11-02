import React, { createContext,useState, useEffect } from 'react'

import yelp from '../api/yelp'

export const RestaurantContext  = createContext()

export const RestaurantContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [region, setRegion] = useState([])
    const [error, setError] = useState(null)
    const [term, setTerm] = useState('pasta')
    const [city, setCity] = useState('New york')
    const [loading, setLoading] = useState(false)


    const searchApi = async() => {
        setLoading(true)

            try{
                const response = await yelp.get('/search', {
                    params : {
                        term,
                        location : {city},
                        limit : 20
                    }
                })
                setResults(response.data.businesses)
                setRegion(response.data.region)
                if(results){
                    setLoading(false)
                }
            }catch(err){
               setError(err)
               console.log(err)
               setLoading(false)
            }
    }

    useEffect(() => {

        searchApi()
    },[])

    return (
        <RestaurantContext.Provider 
            value={{
                results,
                searchApi,
                loading,
                error,
                region,
                setTerm,
                setCity
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}