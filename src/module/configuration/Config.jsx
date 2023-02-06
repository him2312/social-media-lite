import { Toggle } from "../../components/Toggle"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { fetchPlatformConfig } from "../../platform/manage-config";
import { SUPPORTED_PLATFORMS } from "../../platform";
import { SPACING } from "../../design/theme";
import { sendMessageToContent } from "../../utils/utils";

const ConfigManagement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${SPACING['medium']};
`

const PlatformConfig = styled.div`
    display: flex;
    flex-direction: column;
`

export const Config = (props) => {
    const [configList, setConfigList] = useState([]);

    useEffect(() => {
        if (props.platform) {
            let platformName = props.platform.toLowerCase();

            if(SUPPORTED_PLATFORMS.includes(platformName)) {
                let platformConfig = fetchPlatformConfig(props.platform)
                setConfigList(platformConfig)
            }
        }
    }, [props.platform])

    const handleConfigToggle = (config, event) => {
        let payloadMessage = {
            ...config,
            remove: event
        };
        sendMessageToContent(JSON.stringify(payloadMessage), callbackFromContent);
    }

    const callbackFromContent = (message) => {
        console.log('Over and out', message);
    }

    return (
        <ConfigManagement>
            {
                configList.length > 0 ?
                <PlatformConfig>
                    {
                        configList.map((config) => {
                            return <Toggle key={config.id} label={config.label} toggled={false} onClick={(e) => handleConfigToggle(config, e)}/>
                        })
                    }
                </PlatformConfig> : <div>
                    This website isn't supported
                </div>
            }
        </ConfigManagement>
    )
}