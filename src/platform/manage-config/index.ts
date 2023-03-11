import { SUPPORTED_PLATFORMS } from "..";
import { GMAIL_CONFIG } from "./gmail-config";
import { INSTAGRAM_CONFIG } from "./instagram-config";
import { LINKEDIN_CONFIG } from "./linkedin-config";
import { TWITTER_CONFIG } from "./twitter-config";
import { YOUTUBE_CONFIG } from "./youtube-config";

type PlatformType = Record<string, any>

const PLATFORM_CONFIG: PlatformType = {
    'twitter': TWITTER_CONFIG,
    'youtube': YOUTUBE_CONFIG,
    'instagram': INSTAGRAM_CONFIG,
    'gmail': GMAIL_CONFIG,
    'linkedin': LINKEDIN_CONFIG,
}

export const fetchPlatformConfig = (platform: string) => {
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