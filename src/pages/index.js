import React from "react"

import Layout from "../components/layout"

import HeroTemplate from "../templates/index/hero"
import AboutUsTemplate from "../templates/index/about-us"
import OfferTemplate from "../templates/index/offer"
import PricingTemplate from "../templates/index/pricing"
import ContactTemplate from "../templates/index/contact"

const IndexPage = () => {
    return (
        <Layout>
            <HeroTemplate />
            <AboutUsTemplate />
            <OfferTemplate />
            <PricingTemplate />
            <ContactTemplate />
        </Layout>
    )
}

export default IndexPage
