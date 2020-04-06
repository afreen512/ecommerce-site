import React from "react";
import Download from "./Download.png";
import "./Index.css";
import {Link} from 'react-router-dom'
import AppContext from "../AppContext";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top shadow-sm bg-white navbar-expand-lg">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <Link className="" to="/">
                  <img className="w-100" src={Download} alt="Logo" />
                </Link>
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarcontent"
                  aria-expanded="false"
                >
                  <i className="header-icon fas fa-bars"></i>
                </button>
                <div
                  className="row float-right collapse navbar-collapse"
                  id="navbarcontent"
                >
                  <div className="col-xs-4">
                    <div className="dropdown">
                      < Link
                        to="/"
                        className="headertext"
                        data-toggle="dropdown"
                        data-offset="20,10"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="d-inline-flex">
                          <div className="icon-wrap">
                            <i className="header-icon fas fa-user" />
                          </div>
                          <div className="text-wrap">
                            <span className="small round badge badge-secondary">
                              0
                            </span>
                            <div>Sign In</div>
                            <i className="fas fa-caret-down" />
                          </div>
                        </div>
                      </Link>
                      <div className="dropdown-menu">
                        <form className="px-4 py-3">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="email"
                            ></input>
                          </div>

                          <div className="form-group">
                            <label>Password</label>
                            <input
                              type="Password"
                              className="form-control"
                              placeholder="Password"
                            ></input>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Sign In
                          </button>
                        </form>
                        <hr />
                        <a className="dropdown-item" href="#">
                          Don't have an account?Sign up
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <Link to="/Cart" className="headertext">
                      <div className="d-inline-flex">
                        <div className="icon-wrap">
                          <i className="header-icon fas fa-shopping-cart" />
                        </div>
                        <div className="text-wrap">
                          <span className="small round badge badge-secondary">{this.context.cart.length} </span>
                          <div>Cart</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xs-4">
                    <Link to="/wishlist" className="headertext">
                      <div className="d-inline-flex">
                        <div className="icon-wrap">
                          <i className="header-icon fas fa-heart" />
                        </div>
                        <div className="text-wrap">
                          <span className="small round badge badge-secondary">
                            1
                          </span>
                          <div>Wishlist</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.contextType=AppContext;
export default Navbar;