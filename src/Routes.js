import React from "react";
 
import { Switch, Route } from "react-router-dom";
 
import Home from "./Home";
 
import AppContext from "./AppContext";
 
import { getProducts,getFashions,getComputers,getHouseholds,getElectronics,getPhones } from "./repo";
 
import Cart from "./Pages/Cart";

import Households from './Pages/households'
import Electronics from './Pages/electronics'
import Fashions from './Pages/fashions'
import Phones from './Pages/phones'
import Computers from './Pages/computers'

 
class Routes extends React.Component {
 
  constructor() {
 
    super();
 
    this.state = {
 
      products: [],
      fashions:[],
      computers:[],
      households:[],
      electronics:[],
      phones:[],
      

 
 
      cart: JSON.parse(localStorage.getItem("cart")) || [],
 
      addToCart: (product, qty) => {
 
        let cart = this.state.cart;
 
        cart.push({
 
          product: product,
 
          qty_added: qty
 
        });
 
        this.setState({
 
          cart: cart
 
        });
 
        localStorage.setItem("cart", JSON.stringify(cart));
 
      },
 
 
      removeFromCart: id => {
 
        let cart = this.state.cart,
 
          newCart = [];
 
 
        cart.map(CartItem => {
 
          if (CartItem.product.id !== id) newCart.push(CartItem);
 
        });
 
        this.setState({
 
          cart: newCart
 
        });
 
        localStorage.setItem("cart", JSON.stringify(newCart));
 
      },
 
      clearCart: () => {
 
        localStorage.clear();
 
        this.setState({ cart: [] });
 
        if ({ cart: [] } === null) {
 
        }
 
        alert("cart has been cleared successfully");
 
      }
 
    };
 
  }
 
  componentDidMount() {
 
    getProducts().then(products => {
 
      this.setState({ products }); 
 
    });
    getFashions().then(fashions => {
 
      this.setState({ fashions });
 
    });
    getComputers().then(computers => {
 
      this.setState({ computers });
 
    });
    getHouseholds().then(households => {
 
      this.setState({ households });
 
    });
    getPhones().then(phones => {
 
      this.setState({ phones });
 
    });
    getElectronics().then(electronics => {
 
      this.setState({ electronics});
 
    });
 
 
  }
 
  render() {
 
    return (
 
      <AppContext.Provider value={this.state}>
 
        <Switch>
 
          <Route exact path="/" component={Home}></Route>
 
          <Route path="/cart" component={Cart}></Route>
          <Route  path="/fashions" component={Fashions}></Route>
          <Route  path="/household" component={Households}></Route>
          <Route  path="/electronics" component={Electronics}></Route>
          <Route  path="/phones" component={Phones}></Route>
          <Route  path="/computers" component={Computers}></Route>

      


 
        </Switch>
 
      </AppContext.Provider>
 
    );
 
  }
 
}
 
export default Routes;