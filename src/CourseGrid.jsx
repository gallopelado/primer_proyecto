import React from 'react'
import Curso from './Curso'

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { cursos.map( c => <Curso key={c.id} id={c.id} image={c.image} price={c.price} title={c.titulo} profesor={c.profesor} />) }
    </div>
)

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

export default CourseGrid;