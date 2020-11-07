import React from 'react'

const cursos = [
    {
        id: 1,
        titulo: "React desde cero",
        image: '',
        price: '',
        profesor:''
    }, {
        id: 2,
        titulo: "PHP desde cero",
        image: '',
        price: '',
        profesor:''
    }, {
        id: 3,
        titulo: "Docker desde cero",
        image: '',
        price: '',
        profesor:''
    }, {
        id: 4,
        titulo: "Java desde cero",
        image: '',
        price: '',
        profesor:''
    },
]


const Course = ({match}) => {
    
    const cursoEncontrado = cursos.filter( item => item.id===parseInt(match.params.id) )[0]
    
    return (
        <div className="ed-grid m-grid-3">
        {
                cursoEncontrado ? (
                    <>
                    <h1>Curso: { cursoEncontrado.titulo }</h1>
                    <img  className="m-cols-1" src="/algo" alt="imagen curso"/>
                    <p className="m-cols-2">Descripcion</p>
                    </>
                ) : <h1>Curso no encontrado</h1>
        }
        </div>
        )
}
export default Course;