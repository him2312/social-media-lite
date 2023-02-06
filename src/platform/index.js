
import YoutubeIcon from './images/youtube.png';
import InstagramIcon from './images/instagram.png';
import LinkedinIcon from './images/linkedin.png';
import TwitterIcon from './images/twitter.png';
import GmailIcon from './images/gmail.svg';

const PLATFORM_METADATA = {
    'youtube': {
        urls: ['https://www.youtube.com', 'https://m.youtube.com'],
        icon: YoutubeIcon,
        title: 'Youtube'
    },
    'instagram': {
        urls: ['https://www.instagram.com'],
        icon: InstagramIcon,
        title: 'Instagram'
    },
    'linkedin': {
        urls: ['https://www.linkedin.com'],
        icon: LinkedinIcon,
        title: 'LinkedIn'
    },
    'gmail': {
        urls: ['https://mail.google.com'],
        icon: GmailIcon,
        title: 'Gmail'
    },
    'twitter': {
        urls: ['https://twitter.com'],
        icon: TwitterIcon,
        title: 'Twitter'
    }
}

export const SUPPORTED_PLATFORMS = Object.keys(PLATFORM_METADATA);

const detectPlatform = (platformUrl) => {
    let URL = new window.URL(platformUrl);
    let BASE_URL = URL.origin;

    let DETECTED_PLATFROM = '';

    for (const platform in PLATFORM_METADATA) {
        if (PLATFORM_METADATA[platform].urls.includes(BASE_URL)) {
            DETECTED_PLATFROM = platform;
            break;
        }
    }

    return DETECTED_PLATFROM;
}

export const fetchPlatformMetadata = (platformUrl) => {
    let platform = detectPlatform(platformUrl);

    if (PLATFORM_METADATA[platform]) {
        return PLATFORM_METADATA[platform]
    } else {
        return {
            urls: [],
            icon: null
        }
    }
}