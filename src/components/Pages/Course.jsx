import Axios from 'axios'
import React, {useState, useEffect} from 'react'


const Course = ({match}) => {

    const id = match.params.id
    //Usando el estado
    const [state, setState] = useState({})
    
    //Usando ciclo de vida
    useEffect(() => {
        Axios.get(`https://my-json-server.typicode.com/gallopelado/fake_rest_ejemplo/cursos/${id}`)
        .then(({data}) => setState(data))
    }, [id])
    
    const { title, image } = state
    
    return (
        <div className="ed-grid m-grid-3">
        {
               (
                    <>
                    <h1>Curso: { title }</h1>
                    <img  className="m-cols-1" src={ image } alt="imagen curso"/>
                    <p className="m-cols-2">Descripcion</p>
                    </>
                )
        }
        </div>
        )
}
export default Course;