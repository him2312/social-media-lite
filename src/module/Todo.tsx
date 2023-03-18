import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components"
import { StoreContext } from "../App";
import { TodoItem } from "../components";
import { COLOR_SCHEME, SPACING } from "../design/theme"
import { ContentThemePropsType } from "../store/store";
import { getAllItemsFromStorage } from "../utils/localStorage";

const TodoContainer = styled.div<ContentThemePropsType>`
    flex: 1;
    overflow-y: auto;
    padding: ${SPACING['large']} ${SPACING['medium']} 0px ${SPACING['large']};
    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        background: ${COLOR_SCHEME[currentTheme].background[300]};
    `}
`

const TodoHeader = styled.div<ContentThemePropsType>`
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 20px;
    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        color: ${COLOR_SCHEME[currentTheme].text.primary};
    `}
`

const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const NewTask = styled.div<ContentThemePropsType>`
    display: flex;
    width: 90%;
`


export const Todo = () => {
    const { theme } = useContext(StoreContext)
    const [taskList, setTaskList] = useState<string[]>([])

    useEffect(() => {
        async function fetchAllTodoList() {
            const allItems = await getAllItemsFromStorage()
            const todoItems = Object.keys(allItems).filter((item) => item.startsWith('todo_'))

            setTaskList(todoItems)
        }
        fetchAllTodoList()
    }, [])

    useEffect(() => {
        chrome.storage?.onChanged.addListener((changes) => {
            for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
                setTaskList((taskList) => {
                    if (key.startsWith('todo_')) {
                        if (newValue) {
                            // Add new task
                            return [...taskList, key]
                        } else if (oldValue) {
                            // Remove completed task
                            return taskList.filter((item) => {
                                return item !== key
                            })
                        }
                    }
                    return taskList
                })
            }
        });
    }, [])

    return (<TodoContainer currentTheme={theme}>
        <TodoHeader currentTheme={theme}>
            Task of the day
        </TodoHeader>
        <NewTask currentTheme={theme}>
            <TodoItem type="new"/>
        </NewTask>
        <TaskList>
            {
                taskList.map((todo) => (
                    <TodoItem key={todo} task={todo} type='todo'/>
                ))
            }
        </TaskList>
    </TodoContainer>)
}