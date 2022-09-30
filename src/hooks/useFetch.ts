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

}, [])
 

return { data, setData  }

}

export default useFetch


// export const api = async <T = any,>(
//     url: string,
//     method?: string,
//     body?: unknown
// ): Promise<T> => {
//     const options = {
//         method,
//         body: JSON.stringify(body),
//         headers: { "Content-Type": "application/json" },
//     };
//     const response = await fetch(`${TROCA_API}/${url}`, options);
//     if (response.status >= 400) throw new Error();
//     return response.json();
// };

