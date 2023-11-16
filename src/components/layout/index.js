import React from "react"
import { Helmet } from "react-helmet"

import { LayoutWrapper } from "./index.style"
import { GlobalStyles } from "../../styles/globalStyles"

import Navbar from "../navbar"
import Footer from "../footer"

import favicon from "../../utils/imgs/icon.png"

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyles />
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Furnish Apart - Furnish your Apartment, as you want."
                />
                <title>
                    Furnish Apart - Furnish your Apartment, as you want.
                </title>
                <link
                    rel="canonical"
                    href="https://furnish-apart.netlify.app/"
                />
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            <Navbar />
            {props.children}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout
