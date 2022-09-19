import { useEffect, useRef, useCallback } from "react"
import "quill/dist/quill.snow.css"
import Quill from "quill"

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
]




const TextEditor = () => {
  const wrapperRef = useCallback( (wrapper: HTMLDivElement ) => {
   if (wrapper == null) return
    wrapper.innerHTML = ""
    const editor = document.createElement('div')
     wrapper.append(editor)

    new Quill(editor , {
      theme : "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    })

  }, [])
  
 

  return (
    <>
          <h1>Escribe tu texto</h1>
          
          <div id="container" ref={wrapperRef}></div>
          
          <input type="submit" value="Enviar" />
    </>
  )
}

export default TextEditor