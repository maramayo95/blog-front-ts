import React, {useState, useEffect} from 'react'
import Post from '../../single/Post'
import useFetch from '../../../hooks/useFetch';
import NavBar from '../../single/NavBar';

const PostContainer = () => {
	const url:string = "http://localhost:8080/blog"
	const {data, setData} = useFetch(url)
	

	const deletePost = (id:string)   => {
		//Por que no puedo usar useEffect  ?
		fetch(`http://localhost:8080/blog/${id}`, {
			method: 'DELETE',
			headers : {
				'Content-Type': 'application/json'
			},
		})
		const currentData = data.filter(post => post._id !== id)
		setData(currentData)
		
}


  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Dashboard</h2>
			<p className="font-serif text-sm dark:text-gray-400">Create, post, edit...</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{
				data.map(post => ( <Post key={post._id} deletePost={deletePost} post={post}/>))
			}
			
		</div>
	</div>
</section>
  )
}

export default PostContainer