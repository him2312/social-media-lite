import React, { useEffect, useState } from 'react';
import './App.css';
// import { sendMessageToContent } from './utils/utils';
import styled from 'styled-components'

import { Header } from './module/Header';
import { Manage } from './module/Manage';
// import { Todo } from './module/Todo';
import { Footer } from './module/footer/Footer';
import { fetchPlatformMetadata } from './platform';
import { COLOR_SCHEME } from './design/theme';

const Content = styled.div`
    display: flex;
    height: 510px;
    overflow-y: auto;
    background: ${COLOR_SCHEME.background[400]};
    box-sizing: border-box;
`

const App = () => {
    const [platformData, setPlatformData] = useState({});

    useEffect(() => {
        const queryInfo = {active: true, currentWindow: true};

        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
            const url = tabs[0].url || '';
            getPlatformData(url);
        });

        getPlatformData('https://twitter.com/ui_tutor/status/1619691965414805504');
    }, []);

    const getPlatformData = (url: string) => {
        let data = fetchPlatformMetadata(url)
        setPlatformData(data)
    }

    return (
        <div className="App">
            <Header />
            <Content>
                <Manage data={platformData}/>
                {/* <Todo /> */}
            </Content>
            <Footer/>
        </div>
    );
};

export default App;