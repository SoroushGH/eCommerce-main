import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import './styles/app.css'
import Footer from './components/Footer.js'
import Navbar from './components/Navbar'
import Home from './containers/Home.js'
import About from './containers/About.js'
import Services from './containers/Services.js'
import Contact from './containers/Contact.js'
import Login from './containers/Login.js'
import Payment from './containers/Payment.js'
import Shoes from './components/Shoes.js'
import Accessories from './components/Accessories.js'
import Jackets from './components/Jackets.js'
import AllShoes from './containers/AllShoes.js'
import AllAccessories from './containers/AllAccessories.js'
import AllJackets from './containers/AllJackets.js'
import Panel from './containers/Panel.js'
import CreateProduct from './components/CreateProduct.js'
import CreateUser from './components/CreateUser.js'
import CreateCategory from './components/CreateCategory.js'
import { Context } from "./context";


class App extends React.Component {

  state = {
    cartContext: 0
  };

  changeCart = newVal => {
    this.setState({ cartContext: newVal });
  };

  render() {
    return (
      <Context.Provider value={{ cartContext: this.state.cartContext, changeCart: this.changeCart }}>
        
        <div className="container-fluid  px-0"> {/*  px-0 will remove container-fluid padding*/}
          <Router>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/shoes' component={Shoes} />
            <Route exact path='/accessories' component={Accessories} />
            <Route exact path='/Jackets' component={Jackets} />
            <Route exact path='/all-shoes' component={AllShoes} />
            <Route exact path='/all-accessories' component={AllAccessories} />
            <Route exact path='/all-jackets' component={AllJackets} />
            <Route exact path='/panel' component={Panel} />
            <Route exact path='/create-product' component={CreateProduct} />
            <Route exact path='/create-user' component={CreateUser} />
            <Route exact path='/create-category' component={CreateCategory} />
            <Footer />
          </Router>
        </div>
        
      </Context.Provider>
    )
  }
}
export default App;
