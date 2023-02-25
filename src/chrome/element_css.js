import customFunction from './customFunctions';

const TWITTER_CSS = {
    'twitter_HideHomeFeed': `html:not([data-twitter_hide_home_feed="false"]) div[aria-label*="Your Home Timeline"],div[aria-label*="New Tweets"] {
        opacity: 0 !important;
        pointer-events: none !important;
        height: 0px !important;
        display: none !important;
    }`,
    'twitter_HidePromotedPosts': `
        [data-testid="placementTracking"] article {
            display: none;
      }
    `,
    'twitter_HideWhoToFollow': `
        [aria-label="Who to follow"] {
            display: none;
        }
    `,
    'twitter_HideWhatsHappening': `
        [aria-label*="Trending now"] {
            display: none;
        }
    `,
    'twitter_HideNotifications': `
        [aria-label="Notifications"] {
            display: none;
        }
    `,
    'twitter_HideAllVanity': `
        [role="group"] {
            display: none;
        }
    `,
    'twitter_HideLikes': `
        [href$="/likes"][href*="/status/"],
        [data-testid="like"],
        [data-testid="unlike"] {
            display: none;
        }
    `,
    'twitter_HideRetweets': `
        [href$="/retweets"],
        [href$="/retweets/with_comments"],
        [data-testid="retweet"],
        [data-testid="unretweet"] {
            display: none;
        }
    `,
    'twitter_HideReply': `
        [data-testid="reply"] { 
            display: none;
        }
    `,
    'twitter_HideViewCount': `
        [aria-label*="View Tweet analytics"] {
            display: none;
        }
    `,
    'twitter_HideFollowerFollowing': `
        [href$="/following"][dir][role="link"],
        [href$="/followers"][dir][role="link"] {
            display: none;
        }
    `
}

const YOUTUBE_CSS = {
    'youtube_HideHomeFeed': `html[data-youtube_-hide-home-feed="true"] ytd-browse[page-subtype="home"] .ytd-rich-grid-renderer {
        display: none !important;
    }`,
    'youtube_HideShorts': `html[data-youtube_-hide-shorts="true"] .yt-simple-endpoint[title="Shorts"] {
        display: none !important;
    }`,
    'youtube_HideLibrary': `html[data-youtube_-hide-library="true"] .yt-simple-endpoint[title="Library"] {
        display: none !important;
    }`,
    'youtube_HideYourVideos': `html[data-youtube_-hide-your-videos="true"] .yt-simple-endpoint[title="Your videos"] {
        display: none !important;
    }`,
    'youtube_HideWatchLater': `html[data-youtube_-hide-watch-later="true"] .yt-simple-endpoint[title="Watch later"] {
        display: none !important;
    }`,
    'youtube_HideLikedVideos': `html[data-youtube_-hide-liked-videos="true"] .yt-simple-endpoint[title="Liked videos"] {
        display: none !important;
    }`,
    'youtube_HideHistory': `html[data-youtube_-hide-history="true"] .yt-simple-endpoint[title="History"] {
        display: none !important;
    }`,
    'youtube_HideSubscriptions': `html[data-youtube_-hide-subscriptions="true"] .yt-simple-endpoint[title="Subscriptions"],#sections > ytd-guide-section-renderer:nth-child(2){
        display: none !important;
    }`,
    'youtube_HideExplore': `html[data-youtube_-hide-explore="true"] #sections > ytd-guide-section-renderer:nth-child(3){
        display: none !important;
    }`,
    'youtube_HideAllVanity': `html[data-youtube_-hide-all-vanity="true"] span.ytd-video-meta-block, yt-formatted-string[aria-label*="subscribers"], #info.ytd-watch-metadata {
        display: none !important;
    }`,
    'youtube_HideAds': `html[data-youtube_-hide-ads="true"] ytd-display-ad-renderer {
        display: none !important;
    }`,
    'youtube_HideComments': `html[data-youtube_-hide-comments="true"] ytd-comments {
        display: none !important;
    }`,
    'youtube_HidePlaylists': `html[data-youtube_-hide-playlists="true"] #secondary {
        display: none !important;
    }`,
    'youtube_HideVideoInfo': `html[data-youtube_-hide-video-info="true"] .ytd-watch-metadata {
        display: none !important;
    }`,
    'youtube_DisableAutoplay': `html[data-youtube_-disable-autoplay="true"] button[aria-label*="Autoplay"] {
        display: none !important;
    }`,
    'youtube_HideEndScreenFeed': `html[data-youtube_-hide-end-screen-feed="true"]  .ytp-endscreen-content {
        display: none !important;
    }`,
    'youtube_HideTopRightSuggestion': `html[data-youtube_-hide-top-right-suggestion="true"] .ytp-ce-element {
        display: none !important;
    }`,
    'youtube_HideTopNavigation': `html[data-youtube_-hide-top-navigation="true"] ytd-masthead {
        display: none !important;
    }`,
}

export const getElementCSS = (tag) => {
    if (String(tag).startsWith('twitter')) {
        return TWITTER_CSS[tag] || '';
    } else if (String(tag).startsWith('youtube')) {
        if (customFunction[tag]) {
            console.log('cust func1', customFunction[tag])
            customFunction[tag]()
        }
        return YOUTUBE_CSS[tag] || '';
    }
}

