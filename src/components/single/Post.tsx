import {useEffect} from 'react';
import {Link} from 'react-router-dom' 
import PostProps from '../../interface/interfaces';


interface  Props {
	post: PostProps,
	deletePost: (id:string) => void
}


const Post = ({post, deletePost }:Props) => {
	const {_id, date, title, author, body} = post

	
	
	
	const newDate = new Date(date)
	const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	function capitalizeFirstLetter(str:string) {

		// converting first letter to uppercase
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
	
		return capitalized;
	}

	
	return (
    <>
        <article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
				</a>
				<div className="flex flex-row-reverse mx-4 my-4">
					<button className="px-4 py-2 mx-1 bg-red-500 rounded-sm" onClick={()=> deletePost(_id) }>X</button>
					<Link to={`/edit/article/${_id}`}>
						<button className="px-4 py-2 mx-1 bg-yellow-500 rounded-sm">Edit</button>
					</Link>
				</div>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
					<h4 className='flex-1 py-2 text-sm font-lightf leading-snug'>{author}</h4>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>{capitalizeFirstLetter(newDate.toLocaleDateString("es-ES", options)) + ' - ' + newDate.toLocaleTimeString("es-ES")}</span>
					</div>
				<Link to={`/article/${_id}`} className="mt-4 px-4 py-2 text-center font-semibold rounded bg-gray-100 text-gray-800">Read more</Link>
				</div>
			</article>
    </>
  )
}

export default Post