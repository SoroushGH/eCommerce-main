import React from 'react';
import Panel from '../containers/Panel'
import axios from 'axios';
import '../styles/panel.css'

class CreateUser extends React.Component {

    state = {
        username: '',
        succeed: '',
        failed: ''
    }

    componentDidMount() {
        axios.get('http://localhost:3040/users/get_all_users')
            .then(res => {
                console.log('Get Respomse Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // capture username value
    onChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username
        }
        console.log('User Data: ', data);

        axios.post('http://localhost:3040/users/create', data)
            .then(res => {
                if (res.data.ok === false) {
                    console.log('Sent Data: error', res.data.error.errmsg)
                    this.setState({ failed: `Error: ${res.data.error.errmsg}` })
                }
                else {
                    console.log('Sent Data: ', res.data)
                    this.setState({ succeed: 'New User Successfully Added' })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <section>
                <Panel />
                <div className='container create-user'>
                    <div className='row'>
                        <div className='col-lg-12 BoxShadow'>
                            <form onSubmit={this.onSubmit}>
                                <h2 className="pt-5 pb-3">Create New User</h2>
                                <div className="form-group pb-3">
                                    <label>Username: </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" value="Create" className="btn btn-primary">Create</button>
                                </div>
                                <div className="reply-message">
                                    <p className="">{this.state.failed}</p>
                                    <p className="">{this.state.succeed}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        )
    }

}
export default CreateUser;