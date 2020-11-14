import Axios from 'axios'
import React, {Component} from 'react'
import UserCard from '../Molecules/UserCard'

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

        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-1 m-grid-3 l-grid-4">
                    {users.map(u => ( <UserCard key={u.id} name={u.name} username={u.username} email={u.email} /> ))}
                </div>
            </div>
        )
    }
}

export default Users