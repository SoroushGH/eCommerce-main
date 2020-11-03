import React from 'react'
import '../styles/jackets.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Context } from "../context";

class Jackets extends React.Component {

    static contextType = Context

    state = {
        products: []
    }

    handleAddToCard = (e, prod) => {
        let selectedProduct = JSON.parse(localStorage.getItem('Product')) || []
        selectedProduct.push(prod)
        console.log('Selected Product: ', selectedProduct)
        localStorage.setItem('Product', JSON.stringify(selectedProduct));
        this.context.changeCart(selectedProduct.length)
    }

    componentDidMount() {
        let url = 'http://localhost:3040/products/get_all_products'
        axios.get(url)
            .then((response) => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderJackets = () => {
        let jackets = [];
        let showProduct = 3;

        this.state.products.map((product) => {
            if (product.category == 3) {
                jackets.push(product)
            }
        })

        return jackets.slice(0, showProduct).map(product => (

            <div key={product._id} className='col-lg-4 mb-5'>
                <div className="BoxShadow">
                    <img src={product.img} alt="Jacket" className="img-thumbnail img-fluid mt-5" />
                    <p className="text-capitalize pt-4">{product.product}</p>
                    {/* <p>ID: {product._id}</p> */}
                    <p>Price: {product.price} kr</p>
                    {/* <p>Category: {product.category}</p> */}
                    <button onClick={(e, prod) => this.handleAddToCard(e, product)} className="btn shop-item-button mb-5" type="button">ADD TO CART</button>
                </div>
            </div>

        ))
    }
    render() {
        return (
            <section className='container text-center img'>
                <div className='row'>
                    <div className="col-sm-12 text-center jacket-info">
                            <p>Handmade Jackets</p>
                            <p><NavLink exact to={'/all-jackets'}>See the Full Collection</NavLink></p>
                            <p className="pb-5">
                            Our advice is don’t rush the process: try a few different shapes, 
                            cuts and styles, and you will, inevitably, find the leather jacket 
                            that works best for you. To get you started, we've picked apart the 
                            main genres of leather jacket, from the ones found on motorbikes to the ones found in cockpits. 
                        </p>
                    </div>

                </div>
                <div className="row">
                    {this.state.products.length > 0 && this.renderJackets()}
                </div>
            </section>
        )
    }
}
export default Jackets;