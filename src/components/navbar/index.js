import React from "react"

import { NavbarWrapper, Logo, Nav, Item } from "./index.style"

const navMap = [
    {
        id: 1,
        name: "about",
        link: "about",
    },
    {
        id: 2,
        name: "offer",
        link: "offer",
    },
    {
        id: 3,
        name: "pricing",
        link: "pricing",
    },
    {
        id: 4,
        name: "contact",
        link: "contact",
    },
]

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo />
            <Nav>
                {navMap.map((item) => {
                    return <Item>{item.name}</Item>
                })}
            </Nav>
        </NavbarWrapper>
    )
}

export default Navbar
