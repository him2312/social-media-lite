import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import styled, { css } from 'styled-components'

import { Header } from './module/Header';
import { Manage } from './module/Manage';
// import { Todo } from './module/Todo';
import { Footer } from './module/footer/Footer';
import { fetchPlatformMetadata } from './platform';
import { COLOR_SCHEME } from './design/theme';
import { Action, initialState, reducer, ContentThemePropsType } from './store/store';

const Content = styled.div<ContentThemePropsType>`
    display: flex;
    height: 510px;
    overflow-y: auto;
    box-sizing: border-box;

    ${({ currentTheme }) =>
    css`
        transition: 0.6s;
        background: ${COLOR_SCHEME[currentTheme].background[400]};
    `}
`

type StoreType = {
    theme: "light" | "dark";
    storeDispatch: React.Dispatch<Action>
  };

export const StoreContext = React.createContext<StoreType>({
    theme: "dark",
    storeDispatch: () => {},
  });

const App = () => {
    const [platformData, setPlatformData] = useState({});
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const queryInfo = {active: true, currentWindow: true};

        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
            const url = tabs[0].url || '';
            getPlatformData(url);
        });
    }, []);

    const getPlatformData = (url: string) => {
        let data = fetchPlatformMetadata(url)
        setPlatformData(data)
    }

    return (
        <StoreContext.Provider 
            value={{
                theme: state.theme,
                storeDispatch: dispatch,
            }}
        >
            <div className="App">
                <Header />
                <Content currentTheme={state.theme}>
                    <Manage data={platformData}/>
                    {/* <Todo /> */}
                </Content>
                <Footer/>
            </div>
        </StoreContext.Provider>
    );
};

export default App;