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
        image: 'https://www.victoriarock.club/wp-content/uploads/2019/07/1562348650_hqdefault-365x205.jpg',
        price: '',
        profesor:''
    }, {
        id: 2,
        titulo: "PHP desde cero",
        image: 'https://lh3.googleusercontent.com/proxy/OfSOcE53rNF4U7AofKwe8KbTzXSYcxsUlsriVhSSTtIk1642R_-1xfm27OZhQJgPRJe4sB2iTD7XUiqZRjSCeBWWXF8L-OOLDe7QGmo',
        price: '',
        profesor:''
    }, {
        id: 3,
        titulo: "Docker desde cero",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZW9eNgMvxqjz2XMhMJkgjkUMDpF2nclJZ2g&usqp=CAU',
        price: '',
        profesor:''
    }, {
        id: 4,
        titulo: "Java desde cero",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuD1xnsfWK_POHtIORfNVguuoKzKmibA7clA&usqp=CAU',
        price: '',
        profesor:''
    },
]

export default CourseGrid;