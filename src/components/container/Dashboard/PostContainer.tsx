import React, {useState, useEffect} from 'react'
import Post from '../../single/Post'

const PostContainer = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		 fetch("http://localhost:8080/blog")
		 .then(res => res.json())
		 .then(res => setData(res))
	}, [])

	console.log(data)

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Mis Publicaciones</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{/* {
				data.map(post => (
					<Post key={post._id} data={post}/>
				))
			} */}
			
		</div>
	</div>
</section>
  )
}

export default PostContainer