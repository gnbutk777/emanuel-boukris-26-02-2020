import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";
import routesName from '../../router/routes';

const navConfigure = [
    {
        name: "Home",
        eventKey: routesName.Home,
        isDisable: false,
    },
    {
        name: "Favorites",
        eventKey: routesName.Favorites,
        isDisable: false,
    }
]


const CustomNavbar = () => {
    const history = useHistory();

    const navigate = (key) => {
        history.push(key);
    }

    return (
        <Navbar  className="justify-content-between">
            <h5>Herolo weather task</h5>
            <Nav 
                defaultActiveKey="/"
                fill
                variant="tabs"
                className="mr-sm-2"
                onSelect={navigate}
            >
                {
                    navConfigure.map((navElment) => {
                        const {eventKey, name} = navElment;
                    return <Nav.Link key={eventKey} eventKey={eventKey} >{name}</Nav.Link>
                    })
                }
            </Nav>
        </Navbar>
    );
}
 
export default CustomNavbar;