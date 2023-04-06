import React, { useRef } from 'react'
import { FaSearch, FaShoppingBasket, FaMapMarkerAlt, FaStoreAlt, FaRegBell } from "react-icons/fa"
import './Navbar.css'

const Navbar = () => {
    const inputref = useRef()
    const odaklı = () => {
        inputref.current.focus()
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                    <a className="navbar-brand" id='logo'>
                        <img src="public/prime.png" className="img-fluid mb-1 w-100" alt="logo" />
                    </a>
                    <div className="local d-flex justify-content-center mx-md-3">
                        <FaMapMarkerAlt size={18} className='mt-3 mx-1 text-warning' id='map' />
                        <p className="country mt-3">Turkey,Adana</p>
                    </div>
                    <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="my-nav" className="collapse navbar-collapse ">
                        <div className="search w-75 mx-3">
                            <input type="text" ref={inputref} className="input-group-text w-100 d-inline" placeholder="Search in PrimeMarkt" />
                            <a href="#" onClick={odaklı}><FaSearch className='arama mr-2 text-warning' size={16} color='black' /></a>
                        </div>
                        <div className="sag d-flex justify-content-center align-items-center w-50">
                            <div className="dropdown" id='category'>
                                <button id="my-dropdown" className="btn btn-outline-warning dropdown-toggle mx-3 buton"
                                    data-toggle="dropdown">Category</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Link-1</a>
                                    <a className="dropdown-item" href="#">Link-2</a>
                                    <a className="dropdown-item" href="#">Link-3</a>
                                </div>
                            </div>

                            <div className="icons d-flex justify-content-center align-items-center mx-1">
                                <FaRegBell size={24} color='white' className='mx-1 icon' />
                                <FaStoreAlt size={24} color='white' className='mx-1 icon' />
                                <FaShoppingBasket size={24} color='white' className='mx-1 icon' />
                            </div>
                            <div className="user d-flex justify-content-center align-items-center">
                                <img src="man.jpg" className='img-fluid  rounded-circle man mb-2' alt="user" />
                                <p className="text ">Jack
                                    <span className="text-warning"> Online</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar