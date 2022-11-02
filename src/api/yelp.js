import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 
        'Bearer P2mpe-yWwb7HUXTcyivCRiZdG3-NOhwTid-56-3nIqiIfe6-jRIq5IReZAWxPefXwXBDrETEVEVxWq8F-DXGNtzgvFCNEFbpJldQi_gnfG46FSx3seGH0EuOEt65YnYx',
    }
})