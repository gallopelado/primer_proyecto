import React from 'react'

const courses = [
    {
        id: 1,
        title: "React desde cero",
        image: 'https://www.victoriarock.club/wp-content/uploads/2019/07/1562348650_hqdefault-365x205.jpg',
        price: '',
        professor:''
    }, {
        id: 2,
        title: "PHP desde cero",
        image: 'https://edteam-media.s3.amazonaws.com/courses/small/5ec26692-8451-4297-a59a-adb1829a90e8.jpg',
        price: '',
        professor:'Juan'
    }, {
        id: 3,
        title: "Docker desde cero",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZW9eNgMvxqjz2XMhMJkgjkUMDpF2nclJZ2g&usqp=CAU',
        price: '',
        professor:''
    }, {
        id: 4,
        title: "Java desde cero",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuD1xnsfWK_POHtIORfNVguuoKzKmibA7clA&usqp=CAU',
        price: '',
        professor:''
    },
]


const Course = ({match}) => {
    
    const cursoEncontrado = courses.filter( item => item.id===parseInt(match.params.id) )[0]
    
    return (
        <div className="ed-grid m-grid-3">
        {
                cursoEncontrado ? (
                    <>
                    <h1>Curso: { cursoEncontrado.title }</h1>
                    <img  className="m-cols-1" src={ cursoEncontrado.image } alt="imagen curso"/>
                    <p className="m-cols-2">Descripcion</p>
                    </>
                ) : <h1>Curso no encontrado</h1>
        }
        </div>
        )
}
export default Course;