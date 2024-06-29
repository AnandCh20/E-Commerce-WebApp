import React, { useState } from "react";
import Cart from "./Cart";
// import "./NavBar.css";

const NavBar = ({ cartItems, removeFromCart }) => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div className="container text-white">
                <h1 className="navbar-brand text-white" href="#">
                    MyShop
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasLabel">MyShop</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav flex-grow-1 justify-content-end">
                            <li className="nav-item"></li>
                            <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                            <li className="nav-item"><a className="nav-link" href="#" onClick={toggleCart}>🛒Cart</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">
                                <svg className="bi" width="24" height="24"><use xlinkHref="#cart" /></svg>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;