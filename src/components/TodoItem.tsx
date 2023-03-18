import { Checkbox } from "./Checkbox"
import { Input } from "./Input"
import { useContext, useState } from 'react'
import { deleteFromLocalStorage, setToLocalStorage } from "../utils/localStorage"
import styled, {css} from "styled-components"
import { COLOR_SCHEME } from "../design/theme"
import { StoreContext } from "../App"
import { ContentThemePropsType } from "../store/store"
import { removeTodoIdentifier } from "../utils/utils"

const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    width: 100%;
`

const Task = styled.div<ContentThemePropsType & {completed: boolean}>`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.2px;
    ${({ currentTheme }) =>
        css`
            transition: 0.6s;
            color: ${COLOR_SCHEME[currentTheme].text.primary};
        `}

    ${({ completed }) =>
        css`
            transition: 0.6s;
            opacity: ${completed ? '0' : '1'};
            text-decoration: ${completed ? 'line-through' : ''};
        `}
`

type TodoItemProps = {
    type: 'new' | 'todo',
    task?: string
}

export const TodoItem = (props: TodoItemProps) => {
    const [newTask, setNewTask] = useState<string>('')
    const [taskStatus, setTaskStatus] = useState<boolean>(false)
    const { theme } = useContext(StoreContext)

    const addNewTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            setToLocalStorage(`todo_${newTask}`, true)
            // Clear out the task
            setNewTask('')
        }
    }

    const taskCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setTaskStatus(event.target.checked)

            setTimeout(() => {
                deleteFromLocalStorage(String(props.task))
            }, 600)
        } else {
            event.stopPropagation()
        }
    }

    return (
        <TodoItemContainer>
            
            {
                props.type === 'new' ?
                <> 
                    <Checkbox disabled />
                    <Input placeholder={'Add a new task here...'} value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyUp={addNewTask}/>
                </>
                :
                <>
                    <Checkbox checked={taskStatus} onChange={(e) => taskCompleted(e)}/>
                    <Task currentTheme={theme} completed={taskStatus}>{removeTodoIdentifier(props.task)}</Task>
                </>
            }
        </TodoItemContainer>
    )
}
