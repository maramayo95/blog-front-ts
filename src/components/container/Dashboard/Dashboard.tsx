import {useState, useEffect} from 'react'
import Footer from '../../single/Footer'
import NavBar from '../../single/NavBar'
import PostContainer from './PostContainer';

const Dashboard = () => {
 

  return (
    <>
      <NavBar/>
      <PostContainer/>
      <Footer/>
    </>
  )
}

export default Dashboard