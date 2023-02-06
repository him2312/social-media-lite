import styled from "styled-components"
import { COLOR_SCHEME, EXTENSION_NAME, SPACING } from "../design/theme"
import LogoBlack from '../images/logo-black.png';
import ThemeLogo from '../images/theme.png';
import PowerLogo from '../images/power.png';

const HeaderContainer = styled.div`
    background: ${COLOR_SCHEME.background[200]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SPACING['medium']};
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
`

const BrandHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    .brand-logo {
        margin-right: ${SPACING['medium']};
        height:30px;
        width:30px;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    .theme-logo {
        cursor: pointer;
        height:30px;
        width:30px;
        margin-right: ${SPACING['small']};
    }
    .power-logo {
        cursor: pointer;
        height:26px;
        width:26px;
        margin-bottom: 1px;
    }
`

export const Header = () => {
    return (<HeaderContainer>
        <BrandHeader>
            <img src={LogoBlack} alt="Social Media Lite" className="brand-logo"/>
            {EXTENSION_NAME}
        </BrandHeader>
        <Controls>
            <img src={ThemeLogo} alt="toggle-theme" className="theme-logo"/>
            <img src={PowerLogo} alt="turn-off" className="power-logo"/>
        </Controls>
    </HeaderContainer>)
}