import React from 'react';
import '../styles/allAccessories.css'
import axios from 'axios'
import { Context } from "../context";

class AllShoes extends React.Component {

    static contextType = Context

    state = {
        products: []
    }

    handleAddToCard = (e, prod) => {

        let selectedProduct = JSON.parse(localStorage.getItem('Product')) || []
        selectedProduct.push(prod)
        // console.log('Selected Product: ', selectedProduct)
        localStorage.setItem('Product', JSON.stringify(selectedProduct));
        //console.log('localStorage items=> ', localStorage)
        this.context.changeCart(selectedProduct.length)
    }


    componentDidMount() {
        let url = 'http://localhost:3040/products/get_all_products'
        axios.get(url)
            .then((response) => {
                //let tempState = this.state.products
                // tempState = response.data
                this.setState({ products: response.data }, /* console.log('state==>', this.state.products) */)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderAllShoes = () => {
        return this.state.products.map((product, index) => {
            if (product.category == 1) {
                return (
                    <div key={product._id} className="col-lg-4 pb-5">
                        <div className="BoxShadow">
                            <img src={product.img} alt="Shoe" className="img-thumbnail img-fluid mt-5" />
                            <p className="text-capitalize pt-3">{product.product}</p>
                            {/* <p>ID: {product._id}</p> */}
                            <p>Price: {product.price} kr</p>
                            {/* <p>Category: {product.category}</p> */}
                            {/* <p>Index: {index}</p> */}
                            <button onClick={(e, prod) => this.handleAddToCard(e, product)} className="btn shop-item-button mb-5" type="button">ADD TO CART</button>
                        </div>
                    </div>
                )
            }
        })
    }
    render() {
        return (
            <section className='container text-center img all-product-info'>
                <p>SHOE PRODUCTS</p>
                <div className="row">
                    {this.state.products.length > 0 && this.renderAllShoes()}
                </div>
            </section>
        )
    }
}

export default AllShoes;
