import { SUPPORTED_PLATFORMS } from "..";
import { TWITTER_CONFIG } from "./twitter-config";

const PLATFORM_CONFIG = {
    'twitter': TWITTER_CONFIG
}

export const fetchPlatformConfig = (platform) => {
    let platformName = platform.toLowerCase();

    if (SUPPORTED_PLATFORMS.includes(platformName)) {
        if (PLATFORM_CONFIG[platformName]) {
            return PLATFORM_CONFIG[platformName];
        } else {
            return {};
        }
    }
    return {};
}