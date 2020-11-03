import React from 'react'
import '../styles/shoes.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Context } from "../context";

class Shoes extends React.Component {

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
                //let tempState = this.state.products
                // tempState = response.data
                this.setState({ products: response.data }, /* console.log('state==>', this.state.products) */)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderShoes = () => {
        let shoes = [];
        let showProduct = 3;


        this.state.products.map((product) => {
            if (product.category == 1) {
                shoes.push(product)
            }
        })

        return shoes.slice(0, showProduct).map(product => (

            <div key={product._id} className='col-lg-4'>
                <div className="BoxShadow">
                    <img src={product.img} alt="Shoe" className="img-thumbnail img-fluid mt-5" />
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
                <div className="row">
                    <div className="col-sm-12 text-center shoes-info">
                        <p>Shoes Collection</p>
                        <p><NavLink exact to={'/all-shoes'}> See the Full Collection </NavLink></p>
                        <p className="pb-5">
                            Customers the world over, don’t just wear Malibo & Blue shoes for office antics. 
                            Our shoe are carefully chosen to suit many aspects of their lives. 
                            This collection, agreed upon well before COVID-19 was a daily talking point, 
                            once again bolsters those ‘lifestyle’ products on offer from M&B, 
                            an ever-increasing selection over the past decade. 
                            AW20 sees a versatile selection of shoes & boots appropriate for every aspect of… The ‘new norm’.
                        </p>
                      
                    </div>
                </div>
                <div className="row">
                    {this.state.products.length > 0 && this.renderShoes()}
                </div>
            </section>
        )
    }
}
export default Shoes;