import { useState } from "react"

export default useApi = (apiFunc) => {
    //Getting data from api/serve
    //Declare a state to store the listings we get from the server
    const[data, setListings] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const request = async (...args) => {
        setLoading(true)
        const response = await apiFunc(...args)
        setLoading(false)


        if(!response.ok) return setError(true)

        setError(false)
        //set the listings to the data we get from the server
        setListings(response.data)
    }
    return { data, error, loading, request }
}