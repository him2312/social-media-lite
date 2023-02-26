import styled, { css } from "styled-components"
import { COLOR_SCHEME, EXTENSION_NAME, SPACING } from "../design/theme"
import LogoBlack from '../images/logo-black.png';
import ThemeLogo from '../images/theme.png';
// import PowerLogo from '../images/power.png';
import { useContext } from "react";
import { StoreContext } from "../App";
import { Theme } from "../store/store";

const HeaderContainer = styled.div<ThemeSelectorProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SPACING['medium']};
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 10;

    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        background: ${COLOR_SCHEME[currentTheme].brand};
    `}
`

const BrandHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.3px;
    .brand-logo {
        margin-right: ${SPACING['medium']};
        height:30px;
        width:30px;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    .power-logo {
        cursor: pointer;
        height:26px;
        width:26px;
        margin-bottom: 1px;
    }
`


type ThemeSelectorProps = {
    currentTheme: Theme
}

const ThemeSelector = styled.img<ThemeSelectorProps>`
    cursor: pointer;
    height:30px;
    width:30px;
    margin-right: ${SPACING['small']};
    transition: 0.6s;
    transform: ${props => props.currentTheme === 'dark' ? 'rotate(180deg)': 'rotate(0deg)'} ;
`

export const Header = () => {
    const { theme, storeDispatch } = useContext(StoreContext);

    const toggleTheme = () => {
        let switchedTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        storeDispatch({type: 'CHANGE_THEME', payload: switchedTheme});
    }

    return (<HeaderContainer currentTheme={theme}>
        <BrandHeader>
            <img src={LogoBlack} alt="Social Media Lite" className="brand-logo"/>
            {EXTENSION_NAME}
        </BrandHeader>
        <Controls>
            <ThemeSelector src={ThemeLogo} currentTheme={theme} alt="toggle-theme" onClick={toggleTheme}/>
            {/* <img src={PowerLogo} alt="turn-off" className="power-logo"/> */}
        </Controls>
    </HeaderContainer>)
}