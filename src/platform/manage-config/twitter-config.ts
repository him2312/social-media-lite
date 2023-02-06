export const TWITTER_CONFIG = [
        {
            id: 'twitter_hide_home_feed',
            label: 'Hide Home feed',
            target: '[aria-label="Timeline: Your Home Timeline"]',
            capture: 'querySelector'
        },
        {
            id: 'twitter_hide_explore',
            label: 'Hide Explore',
            target: '[aria-label="Timeline: Trending now"]',
            capture: 'querySelector'
        },
        {
            id: 'twitter_hide_notifications',
            label: `Hide Notifications`,
            target: '[aria-label="Notifications"]',
            capture: 'querySelector'
        }
    ]