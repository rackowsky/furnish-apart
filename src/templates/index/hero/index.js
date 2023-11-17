import React from "react"

import {
    HeroTemplateWrapper,
    LeftSideHero,
    Break,
    RightSideHero,
    Info,
    InfoSymbol,
    Image,
    InfoSecond,
    InfoSymbolSecond,
} from "./index.style"

import Container from "../../../components/container"

const HeroTemplate = () => {
    return (
        <Container>
            <HeroTemplateWrapper>
                <LeftSideHero>
                    <h1>
                        Furnish your
                        <br />
                        Apartment,
                        <br />
                        as you{" "}
                        <span style={{ textDecoration: "underline" }}>
                            want
                        </span>
                        .
                    </h1>
                    <h2>
                        Arrange furniture the way you want with professional
                        help of specialists.
                    </h2>
                    <Info>
                        <InfoSymbol />
                        <p>We use cookies and other tracking technologies</p>
                    </Info>
                </LeftSideHero>
                <Break />
                <RightSideHero>
                    <Image />
                    <InfoSecond>
                        <p>
                            the perfect support that will help
                            <br />
                            you make the right decisions
                        </p>
                        <InfoSymbolSecond />
                    </InfoSecond>
                </RightSideHero>
            </HeroTemplateWrapper>
        </Container>
    )
}

export default HeroTemplate
