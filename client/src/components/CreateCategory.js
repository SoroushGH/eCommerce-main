import React from 'react';
import Panel from '../containers/Panel'
import axios from 'axios';
import '../styles/panel.css'

class CreateCategory extends React.Component {

    state = {
        category: '',
        category_id: 0,
        succeed: '',
        failed: ''
    }

    componentDidMount() {
        axios.get('http://localhost:3040/categories/get_all_categories')
            .then(res => {
                console.log('Get Response Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // capture category name value
    onChangeCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    // capture categori id
    onChangeCategory_id = (e) => {
        this.setState({ category_id: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            category: this.state.category,
            category_id: this.state.category_id
        }
        console.log('Data:', data);

        axios.post('http://localhost:3040/categories/create', data)
            .then(res => {
                if (res.data.ok === false) {
                    console.log('Sent Data: error', res.data.error.errmsg)
                    this.setState({ failed: `Error: ${res.data.error.errmsg}` })
                }
                else {
                    console.log('Sent Data: ', res.data)
                    this.setState({ succeed: 'New Category Successfully Added' })
                }
            })
            .catch(error => {
                console.log('Error: ', error)
            })
    }


    render() {
        return (

            <section>
                <Panel />
                <div className='container create-category'>
                    <div className='row'>
                        <div className='col-lg-12 BoxShadow'>
                            <form onSubmit={this.onSubmit}>
                                <h2 className="pt-5 pb-3">Create New Category</h2>
                                <div className="form-group pb-3">
                                    <label><h5>Category Name: </h5></label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.category}
                                        onChange={this.onChangeCategory}
                                    />
                                </div>
                                <div className="form-group pb-3">
                                    <label><h5>Category ID: </h5></label>
                                    <ul>
                                        <li>Shoes = 1</li>
                                        <li>Accessories = 2</li>
                                        <li>Jackets = 3</li>
                                    </ul>
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        value={this.state.category_id}
                                        onChange={this.onChangeCategory_id}
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
export default CreateCategory;