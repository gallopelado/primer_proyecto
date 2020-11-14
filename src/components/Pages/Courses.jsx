import Axios from 'axios'
import React, {Component} from 'react'
import CourseGrid from '../Organisms/CourseGrid'

class Courses extends Component {

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
        return <CourseGrid courses={courses} />
    }
}


export default Courses;