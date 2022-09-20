

const Login = () => {
  return (
    <div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
	<form  action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
		<label  className="self-start text-xs font-semibold">Username or Email</label>
		<input id="username" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
		<label  className="self-start mt-3 text-xs font-semibold">Password</label>
		<input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
		<button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Login</button>
		<div className="flex justify-center mt-6 space-x-2 text-xs">
			<a rel="noopener noreferrer" href="#" className="dark:text-gray-400">Forgot Password?</a>
			<span className="dark:text-gray-400">/</span>
			<a rel="noopener noreferrer" href="#" className="dark:text-gray-400">Sign Up</a>
		</div>
	</form>
</div>
  )
}

export default Login