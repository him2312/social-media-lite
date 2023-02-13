import styled from 'styled-components';
import { useEffect, useState } from "react";
import { fetchPlatformConfig } from "../../platform/manage-config";
import { SUPPORTED_PLATFORMS } from "../../platform";
import { SPACING } from "../../design/theme";

import { ConfigSection } from "./ConfigSection";

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
    width: 100%;
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

    return (
        <ConfigManagement>
            {
                Object.keys(configList).length > 0 ?
                <PlatformConfig>
                    {
                        Object.keys(configList).map((configSection, index) => {
                            return <ConfigSection key={index} title={configSection} data={configList[configSection]}/>
                        })
                    }
                </PlatformConfig> : <div>
                    This website isn't supported
                </div>
            }
        </ConfigManagement>
    )
}