import {useState} from 'react'
import useFetch from "../../../hooks/useFetch"
import { useParams } from 'react-router-dom';
import Article from "../../single/Article";
import NavBar from '../../single/NavBar';

const ArticleContainer = () => {

    const {data} = useFetch('http://localhost:8080/blog')
    const {id} = useParams()
    
    const findArt = data.find(art => art._id === id )
  return (
    <div>
      <NavBar/>
     {
      data.length < 1 ? (
        <h1>Loading...</h1>
      ):
      <Article findArt={findArt} /> 
     }

    </div>
  )
}

export default ArticleContainer