import React from 'react'
import '../styles/accessories.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Context } from "../context";

class Accessories extends React.Component {

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

    renderAccessories = () => {
        let accessories = [];
        let showProduct = 3;

        this.state.products.map((product) => {
            if (product.category == 2) {
                accessories.push(product)
            }
        })

        return accessories.slice(0, showProduct).map(product => (

            <div key={product._id} className='col-lg-4'>
                <div className="BoxShadow">
                    <img src={product.img} alt="Accessory" className="img-thumbnail img-fluid mt-5" />
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
                    <div className="col-sm-12 text-center accessory-info">
                        <p>Accessories</p>
                        <p><NavLink exact to={'/all-accessories'}>See the Full Collection</NavLink></p>
                        <p className="pb-5">
                            No man should need to endure a derelict pair of shoes. 
                            Not only do your shoes define the type of man you are, 
                            they can also determine whether or not you’ll get lucky with that cute bird at the bar.
                            This brings us to the lost art of shoe polishing. 
                            The practice traces its modern origins to the military as part of a soldier’s dress standards.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {this.state.products.length > 0 && this.renderAccessories()}
                </div>
            </section>
        )
    }
}
export default Accessories;