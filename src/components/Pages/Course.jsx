import React, {useState, useEffect} from 'react'
import Axios from 'axios'


const Course = ({match}) => {

    const id = match.params.id
    //Usando el estado
    const [courses, setCourses] = useState({})
    const [comment, setComment] = useState(null)
    
    //Usando ciclo de vida
    useEffect(() => {
        Axios.get(`https://my-json-server.typicode.com/gallopelado/fake_rest_ejemplo/cursos/${id}`)
        .then(({data}) => setCourses(data))
    }, [id])
    
    const toSetComment = (e) => {
        setComment(e.target.value)
    }

    const { title, image } = courses
    
    return (
        <div className="ed-grid m-grid-3">
        {
               (
                    <div className="ed-grid">
                    <div className="l-block">
                        <h1>Curso: { title }</h1>
                        <img  className="m-cols-1" src={ image } alt="imagen curso"/>
                        <p className="m-cols-2">Descripcion</p>
                    </div>
                    <div className="ed-grid">
                        <h2>Escribe tu comentario</h2>
                        <input type="text" placeholder="Escribe ..." onChange={ toSetComment.bind(this) } />
                        <p>{comment ? comment : 'No hay comentarios'}</p>
                    </div>
                    </div>
                )
        }
        </div>
        )
}
export default Course;