import React, { useState } from 'react'
import logo from '../../assets/image/logo.png'
import border from '../../assets/image/border.svg'
import plusicon from '../../assets/image/plusicon.svg'
import Login from '../login/Login'
import { Modal, Button } from 'antd';
import "./topmenu.css"





function Navbar() {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {

        setVisible(false);
    };

    const handleCancel = () => {

        setVisible(false);
    };


    return (
        <>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav   mb-2 mb-lg-0">

                            <li className="nav-item dropdown  mx-3 d-flex justify-content-center align-items-center border border-black gap-3 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pakistan
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex w-50 border border-black " role="search">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Find Cars, Mobile Phone and more..."
                                aria-label="Search"
                            />
                            <div className='bg-black p-2 px-3 text-white'>
                                <svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </div>

                        </form>
                    </div>
                    <Button type="primary" onClick={showModal}>
                        Login
                    </Button>
                    <Modal title="" visible={visible} onOk={handleOk} onCancel={handleCancel}>

                        <Login />

                    </Modal>



                </div>

            </nav >
        </>
    )
}

export default Navbar