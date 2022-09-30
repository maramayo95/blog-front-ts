import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import EditArticle from '../../single/EditArticle'
import PostProps from '../../../interface/interfaces';

const EditArticleContainer = () => {
  const [data, setData ] = useState<PostProps>()
  const {id} = useParams()
  useEffect(() => {
    const fetching = async () => {
      const request = await fetch(`http://localhost:8080/blog/${id}`)
      const response = await request.json()
      setData(response)
    }
    fetching()
  },[])
  
  return (
    <>
    {
      !data ? <h1>Cargando...</h1> : <EditArticle data={data}/>
    }
    </>
  )
}

export default EditArticleContainer