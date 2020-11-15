import Axios from 'axios'
import React, {Component} from 'react'
import UsersGrid from '../Organisms/UsersGrid'

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        /* fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                this.setState({
                    users: json
                })
            }) */
        Axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
            this.setState({
                users: data
            })
        })
    }

    render() {

        const { users } = this.state

        return <UsersGrid users={users} />
    }
}

export default Users