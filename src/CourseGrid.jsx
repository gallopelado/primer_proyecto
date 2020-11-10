import React from 'react'
import CourseCard from './CourseCard'

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { courses.map( c => <CourseCard key={c.id} id={c.id} image={c.image} price={c.price} title={c.title} professor={c.professor} />) }
    </div>
)

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

export default CourseGrid;