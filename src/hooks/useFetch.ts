import {useState, useEffect} from 'react'
import PostProps from '../interface/interfaces'
    

const useFetch = (url:string) => {
 const [data, setData] = useState<PostProps[]>([])
 
 useEffect(() => {
     const fetching = async () => {
        const request = await fetch(url)
        const response = await request.json()
        setData(response)
    
    }
    
    fetching()

}, [data])
 

return { data  }

}

export default useFetch