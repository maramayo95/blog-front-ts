import img from '../../../public/img/img.png'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Crea tus propias
				<br/>
				<span className="dark:text-violet-400">publicaciones</span> 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Podrás almacenar tus escritos en la nube
				<span className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem</span>
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/login" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Ingresar</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    </div>
  )
}

export default Hero