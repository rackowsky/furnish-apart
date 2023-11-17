import styled from "styled-components"

import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

export const ContainerWrapper = styled.div`
    position: relative;
    margin-top: ${ViewportCalculator(40, "desktop")};
    margin-bottom: ${ViewportCalculator(40, "desktop")};
    margin-left: ${ViewportCalculator(100, "desktop")};
    margin-right: ${ViewportCalculator(100, "desktop")};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23707070FF' stroke-width='2' stroke-dasharray='5%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

    @media ${theme.media.desktop} {
        margin: 40px 100px;
    }
    @media ${theme.media.laptop} {
        margin-top: ${ViewportCalculator(40, "laptop")};
        margin-bottom: ${ViewportCalculator(40, "laptop")};
        margin-left: ${ViewportCalculator(100, "laptop")};
        margin-right: ${ViewportCalculator(100, "laptop")};
    }
    @media ${theme.media.tablet} {
        margin-top: ${ViewportCalculator(20, "tablet")};
        margin-bottom: ${ViewportCalculator(20, "tablet")};
        margin-left: ${ViewportCalculator(25, "tablet")};
        margin-right: ${ViewportCalculator(25, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        margin-top: ${ViewportCalculator(15, "largeMobile")};
        margin-bottom: ${ViewportCalculator(15, "largeMobile")};
        margin-left: ${ViewportCalculator(10, "largeMobile")};
        margin-right: ${ViewportCalculator(10, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        margin-top: ${ViewportCalculator(15, "mobile")};
        margin-bottom: ${ViewportCalculator(15, "mobile")};
        margin-left: ${ViewportCalculator(10, "mobile")};
        margin-right: ${ViewportCalculator(10, "mobile")};
    }
`
