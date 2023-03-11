import { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { StoreContext } from '../App'
import { SPACING, COLOR_SCHEME } from '../design/theme'
import { ContentThemePropsType } from '../store/store'
import { getFromLocalStorage } from '../utils/localStorage'

const ToggleSwitch = styled.label<ContentThemePropsType>`
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;
    margin-top: ${SPACING['small']};
    margin-bottom: ${SPACING['small']};
    display: flex;
    align-items: center;
  
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2c3e50;
        transition: 0.3s;
        border-radius: 20px;
    }
    
    strong {
        position: absolute;
        left: 100%;
        width: max-content;
        height: 100%;
        line-height: 30px;
        margin-left: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    
    span:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3.5px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }
    
    input:checked + span {
        background-color: #00c853;
    }
    
    input:checked + span:before {
        transform: translateX(20px);
    }

    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        color: ${COLOR_SCHEME[currentTheme].text.primary};
    `}
`

type TogglePropsType = {
    tag: string,
    label: string,
    toggled: boolean,
    handleClick: (isToggled: boolean) => void
}

export const Toggle = ({ tag, label, toggled, handleClick }: TogglePropsType) => {
    const [isToggled, setToggle] = useState<boolean>(false)
    const { theme } = useContext(StoreContext)

    const callback = () => {
        setToggle(!isToggled)
        handleClick(!isToggled)
    }

    useEffect(() => {
        async function fetchPersistedValue() {
            const togglePersistedValue = await getFromLocalStorage(tag)
            setToggle(Boolean(togglePersistedValue))
        }

        fetchPersistedValue()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ToggleSwitch currentTheme={theme}>
            <input type="checkbox" checked={isToggled} onChange={callback} />
            <span />
            <strong>{label}</strong>
        </ToggleSwitch>
    )
}