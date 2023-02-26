import { useContext } from "react"
import styled, { css } from "styled-components"
import { StoreContext } from "../../App"
import { COLOR_SCHEME, SPACING } from "../../design/theme"
import { ContentThemePropsType } from "../../store/store"
import { BUY_ME_A_BOOK, GOOGLE_REQUEST_FEATURE_FORM } from "./link"

const FooterContainer = styled.div<ContentThemePropsType>`
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SPACING['medium']};
    height: 40px;
    box-sizing: border-box;
    position: sticky;
    bottom: 0;
    z-index: 10;
    box-shadow: 0px 15px 20px 0px #ffffff;
    .footer-cta {
        cursor: pointer;
        user-select: none;
    }

    a:link, a:visited, a:hover, a:active {
        transition: 0.6s;
        color: ${COLOR_SCHEME['light'].text.secondary};
        text-decoration: unset;
    }

    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        background: ${COLOR_SCHEME[currentTheme].background[500]};
        color: ${COLOR_SCHEME[currentTheme].text.secondary};
    `}
`

export const Footer = () => {
    const { theme } = useContext(StoreContext)
    return (<FooterContainer currentTheme={theme}>
        <a href={BUY_ME_A_BOOK} target="_blank" rel="noreferrer">
            <div className="footer-cta">
                Donate
            </div>
        </a>
        <a href={GOOGLE_REQUEST_FEATURE_FORM} target="_blank" rel="noreferrer">
            <div className="footer-cta">
                Request a feature
            </div>
        </a>
        <a href="mailto:himanshu23work@gmail.com?subject=Please look into this&body=I am facing X issue on Y chrome version. Can you please check this?" target="_blank" rel="noreferrer">
            <div className="footer-cta">
                Need help?
            </div>
        </a>
    </FooterContainer>)
}