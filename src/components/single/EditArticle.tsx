import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.css'
   

  type FormValues = {
    title: string;
    author: string;
  }


const EditArticle = ({data}:any) => {

    const [loading , setLoading] = useState<boolean>(true)
    const [value, setValue] = useState<string>(`${data?.body}`)
    const [form, setForm ] = useState<FormValues>({
      title: `${data?.title}`,
      author: `${data.author}`,

    })

    const handleChange = (e:any) => {
      setForm({...form,
        [e.target.name] : e.target.value})
        
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        const bodyReq = {
          title: form.title,
          author: form.author,
          body : value
        }
        console.log(!bodyReq.author)
        
        if(!bodyReq.title || !bodyReq.author || !bodyReq.body) {
            console.log('Debes completar todos los campos ')
          return  // Colocar un seteo de estado que muestre un componente de error
        }
        
        try {
          await fetch(`http://localhost:8080/blog/${data?._id}`, {
           method: 'PUT',
           mode: 'cors',
           headers: {
              'Content-Type': 'application/json',
           },
           body: JSON.stringify(bodyReq)
         }
         )
         setValue("")
         setForm({
          title:"",
          author:""
         })
         setLoading(false)
        } catch (error) {
          console.error(error)
        }
    }
 
    
  return (
    <div className="w-3/4 m-auto lg:w-3/4">
        <h1 className=" text-3xl py-5 text-white text-center lg:text-6xl">
          Write your ideas...
        </h1>
      <form onSubmit={handleSubmit}>

          <div className='flex flex-col my-2 '>
            <label className="text-white" htmlFor="title">Title</label>
            <input className="py-1 px-2" type="text" name="title" id="" placeholder='Insert your title' value={form.title} onChange={handleChange} />
          </div>
          <div className='flex flex-col mb-4 '>
            <label className="text-white" htmlFor="author">Name or AKA</label>
            <input className="py-1 px-2" type="text" name="author" id="author" placeholder='Insert your name or AKA' value={form.author} onChange={ handleChange} />
          </div>
          <ReactQuill className="bg-white h-3/5" theme="snow" id="body" value={value} onChange={setValue} />
        <div className="flex justify-center ">
            {loading ? <input className="my-5 px-8 py-3  cursor-pointer text-lg font-semibold rounded dark:bg-violet-400  text-white" type="submit" value="Post" /> :
            <Link className="my-5 px-8 py-3  cursor-pointer text-lg font-semibold rounded dark:bg-violet-400  text-white" to ="/dashboard">Go to dashboard</Link>
            }
        </div>
      </form>
    </div>
  )
}

export default EditArticle