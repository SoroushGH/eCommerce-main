import React from 'react';
import Panel from '../containers/Panel'
import axios from 'axios';
import '../styles/panel.css'

class CreateProduct extends React.Component {

    state = {
        product: '',
        price: '',
        category: '',
        img: '',
        succeed: '',
        failed: ''
    }

    componentDidMount() {
        axios.get('http://localhost:3040/products/get_all_products')
            .then(res => {
                console.log('Get Respomse Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // capture product name value
    onChangeProduct = (e) => {
        this.setState({ product: e.target.value })
    }

    // capture price value
    onChangePrice = (e) => {
        this.setState({ price: e.target.value })
    }

    // capture category value
    onChangeCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    // capture category value
    onChangeImg = (e) => {
        this.setState({ img: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            product: this.state.product,
            price: this.state.price,
            category: this.state.category,
            img: this.state.img
        }
        console.log('User Data: ', data);

        axios.post('http://localhost:3040/products/create', data)
            .then(res => {
                if (res.data.ok === false) {
                    console.log('Sent Data: error', res.data.error.errmsg)
                    this.setState({ failed: `Error: ${res.data.error.errmsg}` })
                }
                else {
                    console.log('Sent Data: ', res.data)
                    this.setState({ succeed: 'New Product Successfully Added' })
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

                <div className='container pb-5'>
                    <div className='row'>
                        <div className='col-lg-12 BoxShadow'>
                            <form onSubmit={this.onSubmit}>
                                <h2 className="pt-5 pb-3">Create New Product</h2>
                                <div className="form-group pb-3">
                                    <label><h5>Product Name:</h5></label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.product}
                                        onChange={this.onChangeProduct}
                                    />
                                </div>
                                <div className="form-group pb-3">
                                    <label><h5>Price:</h5></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.price}
                                        onChange={this.onChangePrice}
                                    />
                                </div>
                                <div className="form-group pb-3">
                                    <label><h5>Category ID:</h5></label>
                                    <ul>
                                        <li>Shoes = 1</li>
                                        <li>Accessories = 2</li>
                                        <li>Jackets = 3</li>
                                    </ul>
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        value={this.state.category}
                                        onChange={this.onChangeCategory}
                                    />
                                </div>
                                <div className="form-group pb-3">
                                    <label><h5>Image URL:</h5></label>
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        value={this.state.img}
                                        onChange={this.onChangeImg}
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
export default CreateProduct;