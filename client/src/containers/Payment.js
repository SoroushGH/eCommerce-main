import React from 'react';
import '../styles/payment.css'
import { Context } from "../context";


class Payment extends React.Component {

    static contextType = Context

    state = {
        product: [],
        tempPrice: 0,
        itemCount: ''
    }


    // send local storage data to state.product in the first step
    componentDidMount() {
        // let inCartProduct = JSON.parse(localStorage.getItem('Product'))
        // this.setState({ product: inCartProduct })
        // this.setState({ itemCount: inCartProduct.length })
        let inCartProduct = JSON.parse(localStorage.getItem('Product'))
        this.setState({ product: inCartProduct })
        this.setState({ itemCount: inCartProduct.length })
    }

    totaItem = () => {
        if (this.state.product === null || this.state.product.length === 0) {
            return `Cart is empty`
        }
        else {
            return this.state.product.length
        }
    }

    handleRemoveItem = (index) => {
/* 
        let tempProduct = []
        tempProduct = this.state.product
        tempProduct.splice(index, 1)
        // let deleteProduct = tempProduct.splice(index, 1)

        localStorage.setItem('Product', JSON.stringify(tempProduct))
        this.setState({ product: tempProduct })

        let selectedProduct = JSON.parse(localStorage.getItem('Product'))
        // selectedProduct.push(index)
        // console.log('Selected Product: ', selectedProduct)
        localStorage.setItem('Product', JSON.stringify(selectedProduct));
        this.context.changeCart(selectedProduct.length)
     */    
        let tempProduct = []
        tempProduct = this.state.product
        tempProduct.splice(index, 1)
        // let deleteProduct = tempProduct.splice(index, 1)
        localStorage.setItem('Product', JSON.stringify(tempProduct))
        this.setState({ product: tempProduct })
        // these two lines are not doing anything, taking a product and puttin it back to the same localstorage   <=========
        // let selectedProduct = JSON.parse(localStorage.getItem('Product');
        // localStorage.setItem('Product', JSON.stringify(selectedProduct));
        this.context.changeCart(tempProduct.length) // if tempProduct is the array of products, length is their quantity in the cart, right? 
    }

    handleTotalPrice = () => {

        let tempProduct = []
        tempProduct = this.state.product

        let total = this.state.tempPrice

        tempProduct.map((item) => {
            total = item.price + total
        })
        return total

    }

    renderProduct = (arr) => {
        if (this.state.product === null) {
            return null
        }
        else {
            let render = arr.map((item, index) => {
                return (
                    <tr key={item._id}>
                        <td><img src={item.img} alt="img" className="img-thumbnail img-fluid img align-middle" /></td>
                        <td className="text-capitalize align-middle">{item.product}</td>
                        <td className="align-middle">{item.price} kr</td>
                        {/* <td className="align-middle">
                            <button className="btn-outline-danger payBtn">-</button>
                            <input type="" className="count" name="qty" value="1" />
                            <button className="btn-outline-success payBtn">+</button>
                        </td> */}
                        <td className="align-middle">
                            <button onClick={() => this.handleRemoveItem(index)} type="button" className="btn btn-danger btn-sm">Remove</button>
                        </td>
                    </tr>
                )
            })
            return render
        }
    }


    render() {
        return (
            <section className='container payment'>
                <div className="row">

                    <div className='col-lg-12 text-center'>
                        <h1>SHOPPING CART</h1>
                    </div>

                    <div className="col-lg-9">
                        <table className="table product-table text-center">
                            <thead className="table-info ">
                                <tr>
                                    <th scope="col">PRODUCTS</th>
                                    <th scope="col">ITEM NAME</th>
                                    <th scope="col">PRICE</th>
                                    {/* <th scope="col">VALUE</th> */}
                                    <th scope="col">REMOVE ITEM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProduct(this.state.product)}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-lg-3 invoice">
                        <table className="table table-hover">
                            <h2 className="pt-3">Invoice</h2>
                            {/* <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead> */}
                            <tbody>
                                <tr>
                                    <td>Total Item(s)</td>
                                    <td className="text-right">{this.totaItem(this.state.product)}</td>
                                </tr>
                                <tr>
                                    <td>Subtotal</td>
                                    <td className="text-right">{this.handleTotalPrice()} kr</td>
                                </tr>
                                <tr>
                                    <td>Delivery</td>
                                    <td className="text-right">free</td>
                                </tr>
                                <tr>
                                    <td>VAT</td>
                                    <td className="text-right">Included</td>
                                </tr> <br />
                                <tr className="total">
                                    <td>TOTAL</td>
                                    <td className="text-right">{this.handleTotalPrice()} kr</td>
                                </tr>
                            </tbody>

                        </table>
                        <section className="text-center" >
                            <button className="btn paymentBtn mx-auto mt-3 mb-5 btn-success text-uppercase ">proceed to checkout</button>
                        </section>
                    </div>
                </div>
            </section>
        )
    }

}

export default Payment;