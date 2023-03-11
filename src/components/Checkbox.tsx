import styled from "styled-components"
import { SPACING } from "../design/theme"

const CheckboxContainer = styled.input`
    margin-right: ${SPACING['medium']};
    min-height: 20px;
    min-width: 20px;
    box-sizing: border-box;

    :disabled {
        cursor: not-allowed;
    }

    :checked {
        cursor: not-allowed;
        transition: 1s;
        opacity: 0;
    }
`

type EnabledCheckbox = {
    checked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: never
}

type DisabledCheckbox = {
    checked?: never,
    onChange?: never,
    disabled?: boolean
}

type CheckboxProps = EnabledCheckbox | DisabledCheckbox

export const Checkbox  = (props: CheckboxProps) => {
    return (
        <CheckboxContainer type="checkbox" {...props}/>
    )
}