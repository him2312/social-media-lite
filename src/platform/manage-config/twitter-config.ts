export const TWITTER_CONFIG = {
    'Boost productivity': [
        {
            id: 'twitter_hide_home_feed',
            label: 'Hide Home feed',
            target: '[aria-label="Timeline: Your Home Timeline"]',
            capture: 'querySelector',
            value: false,
        },
        {
            id: 'twitter_hide_trending',
            label: `Hide Trending`,
            target: '[aria-label="Trending"]',
            capture: 'querySelector',
            value: false,
        },
        {
            id: 'twitter_hide_who_to_follow',
            label: `Hide Who to follow`,
            target: '[aria-label="Who to follow"]',
            capture: 'querySelector',
            removeParent: true,
            value: false,
        },
        {
            id: `twitter_hide_what's happening`,
            label: `Hide What's happening`,
            target: '[aria-label="Timeline: Trending now"]',
            capture: 'querySelector',
            removeParent: true,
            value: false,
        },
        {
            id: 'twitter_hide_notifications',
            label: `Hide Notifications`,
            target: '[aria-label="Notifications"]',
            capture: 'querySelector',
            value: false,
        }
    ],
    'Hide vanity': [
            {
                id: 'twitter_hide_all_vanity',
                label: 'Hide all tweet metrics',
                target: '[role="group"]',
                capture: 'querySelectorAll',
                value: false,
            },
            {
                id: 'twitter_hide_likes',
                label: `Hide Likes`,
                target: '[role="group"]',
                capture: 'querySelectorAll',
                customFunction: 'hideChildAtNumber',
                childNumber: 3,
                value: false,
            },
            {
                id: 'twitter_hide_retweets',
                label: `Hide Retweets`,
                target: '[data-testid="retweet"]',
                capture: 'querySelectorAll',
                removeParent: true,
                value: false,
            },
            {
                id: 'twitter_hide_reply',
                label: `Hide Replies`,
                target: '[role="group"]',
                capture: 'querySelectorAll',
                customFunction: 'hideChildAtNumber',
                childNumber: 1,
                value: false,
            },
            {
                id: 'twitter_hide_view_count',
                label: `Hide View count`,
                target: '[role="group"]',
                capture: 'querySelectorAll',
                customFunction: 'hideChildAtNumber',
                childNumber: 4,
                value: false,
            },
            {
                id: 'twitter_hide_follower_following',
                label: `Hide Follow count`,
                target: '[role="group"]',
                capture: 'querySelectorAll',
                customFunction: 'hideFollowCount',
                value: false,
            }
    ]
}