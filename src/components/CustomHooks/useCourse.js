import {useState, useEffect} from 'react'
import Axios from 'axios'

const useCourse = (id) => {

    const [courses, setCourses] = useState({})
    useEffect(() => {
        Axios.get(`https://my-json-server.typicode.com/gallopelado/fake_rest_ejemplo/cursos/${id}`)
        .then(({data}) => setCourses(data))
    }, [id])
    return courses
}

export default useCourse