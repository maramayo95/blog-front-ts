import {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.css'


const Editor = () => {
    const [value, setValue] = useState<string>('')
    console.log(value)
  return (
    <div>
        <ReactQuill className="" theme="snow" value={value} onChange={setValue} />
        <div className="postContent" dangerouslySetInnerHTML={{__html: value}}>

        </div>
    </div>
  )
}

export default Editor