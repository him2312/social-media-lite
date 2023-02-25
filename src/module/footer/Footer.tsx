import styled from "styled-components"
import { COLOR_SCHEME, SPACING } from "../../design/theme"
import { BUY_ME_A_BOOK, GOOGLE_REQUEST_FEATURE_FORM } from "./link"

const FooterContainer = styled.div`
    background: ${COLOR_SCHEME.background[500]};
    font-size: 16px;
    color: ${COLOR_SCHEME.text.secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SPACING['medium']};
    height: 40px;
    box-sizing: border-box;
    position: sticky;
    bottom: 0;
    z-index: 10;
    .footer-cta {
        cursor: pointer;
        user-select: none;
    }

    a:link, a:visited, a:hover, a:active {
        color: ${COLOR_SCHEME.text.secondary};
        text-decoration: unset;
    }
`

export const Footer = (props: any) => {
    return (<FooterContainer>
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