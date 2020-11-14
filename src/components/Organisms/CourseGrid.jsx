import Axios from 'axios'
import React, {Component} from 'react'
import CourseCard from '../Molecules/CourseCard'

class CourseGrid extends Component {

    constructor(props) {
        super(props)

        this.state ={
            courses: []
        }
    }

    componentDidMount() {
        Axios.get(`https://my-json-server.typicode.com/gallopelado/fake_rest_ejemplo/cursos`).then(({data}) => {
            this.setState({
                courses: data
            })
        })
    }

    render() {
        const {courses} = this.state
        return (
            <div className="ed-grid m-grid-4">
                { courses.map( c => <CourseCard key={c.id} id={c.id} image={c.image} price={c.price} title={c.title} professor={c.professor} />) }
            </div>
        )
    }
}


export default CourseGrid;