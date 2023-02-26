import { useContext } from "react";
import styled, { css } from "styled-components"
import { StoreContext } from "../../App";
import { Toggle } from "../../components/Toggle"
import { COLOR_SCHEME, SPACING } from "../../design/theme";
import { deleteFromLocalStorage, setToLocalStorage } from "../../utils/localStorage";

const ConfigList = styled.div`
    width: 100%;
    padding: ${SPACING['small']} ${SPACING['medium']};
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 8px;

    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        background: ${COLOR_SCHEME[currentTheme].background[100]};
    `}
`

const ConfigSeparator = styled.div`
    width: 100%;
    margin-bottom: ${SPACING['large']};
`

const ConfigTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-bottom: ${SPACING['small']};

    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        color: ${COLOR_SCHEME[currentTheme].text.primary};
    `}
`

export const ConfigSection = (props) => {
    const { theme } = useContext(StoreContext);

    const handleConfigToggle = (config, event) => {
        config.value = event;
        persistValue(config.id, event);
    }

    const persistValue = (tag, event) => {
        if (event === true) {
            setToLocalStorage(tag, event)
        } else {
            deleteFromLocalStorage(tag)
        }
    }

    return (
        <ConfigSeparator>
            <ConfigTitle currentTheme={theme}>{props.title}</ConfigTitle>
            {
                props.data.length > 0 ? 
                <ConfigList currentTheme={theme}>
                    {
                        props.data.map((config) => {
                            return <Toggle key={config.id} tag={config.id} toggled={config.value} label={config.label} onClick={(event) => handleConfigToggle(config, event)}/>
                        })
                    }
                </ConfigList> : null
            }
        </ConfigSeparator>
    )
}