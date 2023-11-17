import styled from "styled-components"

import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

import logo from "../../utils/imgs/logo.png"

export const NavbarWrapper = styled.div`
    z-index: 999;
    position: fixed;
    height: 100px;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding-top: ${ViewportCalculator(40, "desktop")};
    padding-bottom: ${ViewportCalculator(40, "desktop")};
    padding-left: ${ViewportCalculator(100, "desktop")};
    padding-right: ${ViewportCalculator(100, "desktop")};

    @media ${theme.media.desktop} {
        padding: 65px 150px 0 150px;
    }
    @media ${theme.media.laptop} {
        padding-top: ${ViewportCalculator(40, "laptop")};
        padding-bottom: ${ViewportCalculator(40, "laptop")};
        padding-left: ${ViewportCalculator(100, "laptop")};
        padding-right: ${ViewportCalculator(100, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding-top: ${ViewportCalculator(20, "tablet")};
        padding-bottom: ${ViewportCalculator(20, "tablet")};
        padding-left: ${ViewportCalculator(25, "tablet")};
        padding-right: ${ViewportCalculator(25, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        padding-top: ${ViewportCalculator(15, "largeMobile")};
        padding-bottom: ${ViewportCalculator(15, "largeMobile")};
        padding-left: ${ViewportCalculator(10, "largeMobile")};
        padding-right: ${ViewportCalculator(10, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        padding-top: ${ViewportCalculator(15, "mobile")};
        padding-bottom: ${ViewportCalculator(15, "mobile")};
        padding-left: ${ViewportCalculator(10, "mobile")};
        padding-right: ${ViewportCalculator(10, "mobile")};
    }
`
export const Logo = styled.div`
    height: 60px;
    width: 230px;
    background: no-repeat center/contain url(${logo});
`
export const Nav = styled.div`
    display: flex;
    gap: 60px;
`
export const Item = styled.div`
    font-size: 20px;
    font-weight: bold;
`
