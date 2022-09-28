import {useState, useEffect} from 'react'
import PostProps from '../interface/interfaces'
    

const useFetch = () => {
 const [data, setData] = useState<PostProps[]>([])
 
 useEffect(() => {
     const fetching = async () => {
        const request = await fetch("http://localhost:8080/blog")
        const response = await request.json()
        setData(response)
    
    }
    
    fetching()

}, [])
 

return { data  }

}

export default useFetch