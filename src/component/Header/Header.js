import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">SMART SHOPPING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="side-nav">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/order">Order</Link></Nav.Link>
                        <Nav.Link ><Link to="/admin">Admin</Link></Nav.Link>
                        {
                            loggedInUser.isSigned ? <Link to="/login"><img style={{width: '40px', height: '40px', borderRadius: '50%'}} src={loggedInUser.photo} alt=""/></Link> :
                            <Nav.Link><Link to="/login" className="login-btn">Login</Link></Nav.Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;