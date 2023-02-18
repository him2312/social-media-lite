import styled from "styled-components"
import { Toggle } from "../../components/Toggle"
import { COLOR_SCHEME, SPACING } from "../../design/theme";
import { deleteFromLocalStorage, setToLocalStorage } from "../../utils/localStorage";
import { sendMessageToContent } from "../../utils/utils";

const ConfigList = styled.div`
    background: ${COLOR_SCHEME.background[100]};
    width: 100%;
    padding: ${SPACING['small']} ${SPACING['medium']};
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 8px;
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
`

export const ConfigSection = (props) => {
    const handleConfigToggle = (config, event) => {
        let payloadMessage = {
            ...config,
            remove: event
        };
        config.value = event;
        persistValue(config.id, event);
        sendMessageToContent(JSON.stringify(payloadMessage), callbackFromContent);
    }

    const persistValue = (tag, event) => {
        if (event === true) {
            setToLocalStorage(tag, event)
        } else {
            deleteFromLocalStorage(tag)
        }
    }

    const callbackFromContent = (message) => {
        console.log('Over and out', message);
    }

    return (
        <ConfigSeparator>
            <ConfigTitle>{props.title}</ConfigTitle>
            {
                props.data.length > 0 ? 
                <ConfigList>
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