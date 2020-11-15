import React from 'react'
import withLoader from '../HOC/withLoader'
import CourseCard from '../Molecules/CourseCard'

const CourseGrid = ({ courses }) => (
    <div className="ed-grid m-grid-4">
        { courses.map(c => <CourseCard key={c.id} id={c.id} image={c.image} price={c.price} title={c.title} professor={c.professor} />)}
    </div>
)

export default withLoader('courses')(CourseGrid)