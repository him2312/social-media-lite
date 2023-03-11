import { useContext } from "react"
import styled, {css} from "styled-components"
import { StoreContext } from "../App"
import { COLOR_SCHEME } from "../design/theme"
import { ContentThemePropsType } from "../store/store"

const InputContainer = styled.input<ContentThemePropsType>`
    background: transparent;
    outline: none;
    border: none;
    padding-bottom: 3px;
    padding-left: 0px;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.2px;
    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        border-bottom: 1px solid ${currentTheme === 'light' ? 'rgba(0, 0, 0, 0.3)': 'rgba(256, 256, 256, 0.3)'};
        color: ${COLOR_SCHEME[currentTheme].text.primary};
    `}
`

type InputProps = {
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

export const Input  = (props: InputProps) => {
    const { theme } = useContext(StoreContext)

    return (
        <InputContainer type="text" currentTheme={theme} {...props}/>
    )
}