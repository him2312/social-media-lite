import styled from "styled-components"
import { COLOR_SCHEME, SPACING } from "../../design/theme"

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
    .footer-cta {
        cursor: pointer;
        user-select: none;
    }
`

export const Footer = (props: any) => {
    return (<FooterContainer>
        {/* <div className="footer-cta">
            Donate
        </div> */}
        <div className="footer-cta">
            Request a feature
        </div>
        <div className="footer-cta">
            Need help?
        </div>
    </FooterContainer>)
}