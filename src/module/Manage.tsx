import { useEffect, useState } from "react"
import styled from "styled-components"
import { COLOR_SCHEME, EXTENSION_NAME, SPACING } from "../design/theme"
import { Config } from "./configuration/Config"
import { GOOGLE_REQUEST_FEATURE_FORM } from "./footer/link"

const ManageContainer = styled.div`
    flex: 1;
    background: ${COLOR_SCHEME.background[400]};
`

const PlatformHeader = styled.div`
    display: flex;
    align-items: center;
    padding: ${SPACING['large']} ${SPACING['medium']};
    font-size: 18px;
    .platform-logo {
        width: 30px;
        height: 30px;
        margin-right: ${SPACING['medium']};
    }
`

const PlatformSupported = styled.div`

`

const PlatformNotSupported = styled.div`
    padding: ${SPACING['large']} ${SPACING['x-large']};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    .not-supported-message {
        margin-bottom: 30px;
        line-height: 1.4;

        a:link, a:visited, a:hover, a:active {
            color: ${COLOR_SCHEME.text.primary}
        }
    }

    hr {
        width: 100%;
    }
`

export const Manage = (props: any) => {
    const [isPlatformSupport, setIsPlatformSupported] = useState(false);

    useEffect(() => {
        if (props.data.title) {
            setIsPlatformSupported(true)
        }
    }, [props.data])

    return (<ManageContainer>
        {
            isPlatformSupport ? 
            (<PlatformSupported>
                <PlatformHeader>
                    <img src={props.data.icon} alt={props.data.title} className="platform-logo"/>
                    Manage { props.data.title }
                </PlatformHeader>

                <Config platform={props.data.title}/>
            </PlatformSupported>) : 
            (<PlatformNotSupported>
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