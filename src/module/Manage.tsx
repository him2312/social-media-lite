import { useContext, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { StoreContext } from "../App"
import { COLOR_SCHEME, EXTENSION_NAME, SPACING } from "../design/theme"
import { ContentThemePropsType } from "../store/store"
import { Config } from "./configuration/Config"
import { GOOGLE_REQUEST_FEATURE_FORM } from "./footer/link"

const ManageContainer = styled.div`
    flex: 1;
`

const PlatformHeader = styled.div<ContentThemePropsType>`
    display: flex;
    align-items: center;
    padding: ${SPACING['large']} ${SPACING['medium']};
    font-size: 18px;
    .platform-logo {
        width: 30px;
        height: 30px;
        margin-right: ${SPACING['medium']};
    }

    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        color: ${COLOR_SCHEME[currentTheme].text.primary};
    `}
`

const PlatformSupported = styled.div`

`

const PlatformNotSupported = styled.div<ContentThemePropsType>`
    padding: ${SPACING['large']} ${SPACING['x-large']};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    ${({ currentTheme }) =>
        css`
            transition: 0.6s;
            color: ${COLOR_SCHEME[currentTheme].text.primary};
    `}

    .not-supported-message {
        margin-bottom: 30px;
        line-height: 1.4;
        text-align: center;

        a:link, a:visited, a:hover, a:active {
            ${({ currentTheme }) =>
            css`
                transition: 0.6s;
                color: ${COLOR_SCHEME[currentTheme].text.primary};
            `}
        }
    }

    hr {
        width: 100%;
    }
`

export const Manage = (props: any) => {
    const [isPlatformSupport, setIsPlatformSupported] = useState(false);
    const { theme } = useContext(StoreContext);

    useEffect(() => {
        if (props.data.title) {
            setIsPlatformSupported(true)
        }
    }, [props.data])

    return (<ManageContainer>
        {
            isPlatformSupport ? 
            (<PlatformSupported>
                <PlatformHeader currentTheme={theme}>
                    <img src={props.data.icon} alt={props.data.title} className="platform-logo"/>
                    Manage { props.data.title }
                </PlatformHeader>

                <Config platform={props.data.title}/>
            </PlatformSupported>) : 
            (<PlatformNotSupported currentTheme={theme}>
                <hr/>
                <div className="not-supported-message">
                    This website is not yet<br/>
                    managed by <b>{EXTENSION_NAME}</b>.
                </div>
                <div className="not-supported-message">
                    However, feel free to raise a <a target="_blank" rel="noreferrer" href={GOOGLE_REQUEST_FEATURE_FORM}>Feature request</a><br/>
                    and we'll get it added as soon as possible.
                </div>
                <hr/>
            </PlatformNotSupported>)
        }
    </ManageContainer>)
}