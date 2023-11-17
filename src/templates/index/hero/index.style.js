import styled from "styled-components"
import ViewportCalculator from "../../../styles/viewportCalculator"
import { theme } from "../../../styles/theme"

import heroImage from "../../../utils/imgs/hero-image.png"
import infoSymbol from "../../../utils/imgs/info-symbol.png"
import humanSitting from "../../../utils/imgs/human-sitting.png"

export const HeroTemplateWrapper = styled.div`
    display: flex;
    height: ${ViewportCalculator(850, "desktop")};

    @media ${theme.media.desktop} {
        height: 850px;
    }
    @media ${theme.media.laptop} {
        height: ${ViewportCalculator(850, "laptop")};
    }
    @media ${theme.media.tablet} {
        height: ${ViewportCalculator(850, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        height: ${ViewportCalculator(850, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        height: ${ViewportCalculator(850, "mobile")};
    }
`
export const LeftSideHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 55%;

    > h1 {
        font-weight: bold;
        color: #3b3b3b;
        width: 85%;
        margin-right: ${ViewportCalculator(20, "desktop")};
        line-height: ${ViewportCalculator(70, "desktop")};
        font-size: ${ViewportCalculator(75, "desktop")};

        @media ${theme.media.desktop} {
            margin-right: 20px;
            line-height: 70px;
            font-size: 75px;
        }
        @media ${theme.media.laptop} {
            margin-right: ${ViewportCalculator(20, "laptop")};
            line-height: ${ViewportCalculator(70, "laptop")};
            font-size: ${ViewportCalculator(75, "laptop")};
        }
        @media ${theme.media.tablet} {
            margin-right: ${ViewportCalculator(20, "tablet")};
            line-height: ${ViewportCalculator(70, "tablet")};
            font-size: ${ViewportCalculator(75, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            margin-right: ${ViewportCalculator(20, "largeMobile")};
            line-height: ${ViewportCalculator(70, "largeMobile")};
            font-size: ${ViewportCalculator(75, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            margin-right: ${ViewportCalculator(20, "mobile")};
            line-height: ${ViewportCalculator(70, "mobile")};
            font-size: ${ViewportCalculator(75, "mobile")};
        }
    }
    > h2 {
        font-weight: bold;
        color: #3b3b3b;
        width: 85%;
        margin-top: ${ViewportCalculator(15, "desktop")};
        margin-right: ${ViewportCalculator(20, "desktop")};
        font-size: ${ViewportCalculator(35, "desktop")};

        @media ${theme.media.desktop} {
            margin-top: 15px;
            margin-right: 20px;
            font-size: 35px;
        }
        @media ${theme.media.laptop} {
            margin-top: ${ViewportCalculator(15, "laptop")};
            margin-right: ${ViewportCalculator(20, "laptop")};
            font-size: ${ViewportCalculator(35, "laptop")};
        }
        @media ${theme.media.tablet} {
            margin-top: ${ViewportCalculator(15, "tablet")};
            margin-right: ${ViewportCalculator(20, "tablet")};
            font-size: ${ViewportCalculator(35, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            margin-top: ${ViewportCalculator(15, "largeMobile")};
            margin-right: ${ViewportCalculator(20, "largeMobile")};
            font-size: ${ViewportCalculator(35, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            margin-top: ${ViewportCalculator(15, "mobile")};
            margin-right: ${ViewportCalculator(20, "mobile")};
            font-size: ${ViewportCalculator(35, "mobile")};
        }
    }
`
export const Break = styled.div`
    width: 1px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23707070FF' stroke-width='2' stroke-dasharray='5%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    margin: 10px 0;
`
export const RightSideHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
`
export const Info = styled.div`
    position: absolute;
    left: 30px;
    bottom: 30px;
    display: flex;
    gap: 10px;
    align-items: center;

    > p {
        font-size: 15px;
        font-weight: bold;
    }
`
export const InfoSymbol = styled.div`
    background: no-repeat center/contain url(${infoSymbol});
    height: 30px;
    aspect-ratio: 1/1;
`
export const Image = styled.div`
    background: no-repeat center/cover url(${heroImage});
    width: 375px;
    height: 525px;
    margin-bottom: 20px;
`
export const InfoSecond = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    > p {
        font-size: 15px;
        font-weight: bold;
        text-align: right;
    }
`
export const InfoSymbolSecond = styled.div`
    background: no-repeat center/contain url(${humanSitting});
    height: 80px;
    width: 55px;
`
