import styled from "styled-components"
import { COLOR_SCHEME } from "../design/theme"

const TodoContainer = styled.div`
    flex: 1;
    background: ${COLOR_SCHEME.background[300]};
`

export const Todo = (props: any) => {
    return (<TodoContainer>
        Todo
    </TodoContainer>)
}