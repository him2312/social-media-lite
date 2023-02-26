import { useContext } from "react";
import styled, { css } from "styled-components"
import { StoreContext } from "../App";
import { COLOR_SCHEME } from "../design/theme"
import { ContentThemePropsType } from "../store/store";

const TodoContainer = styled.div<ContentThemePropsType>`
    flex: 1;
    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        background: ${COLOR_SCHEME[currentTheme].background[300]};
    `}
`

export const Todo = (props: any) => {
    const { theme } = useContext(StoreContext)

    return (<TodoContainer currentTheme={theme}>
        Todo
    </TodoContainer>)
}