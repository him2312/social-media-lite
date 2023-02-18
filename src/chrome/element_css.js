const TWITTER_CSS = {
    'twitterHideHomeFeed': `html:not([data-twitter_hide_home_feed="false"]) div[aria-label*="Your Home Timeline"] {
        opacity: 0 !important;
        pointer-events: none !important;
        height: 0px !important;
        display: none !important;
    }`,
    'twitterHidePromotedPosts': `
        [data-testid="placementTracking"] article {
            display: none;
      }
    `,
    'twitterHideWhoToFollow': `
        [aria-label="Who to follow"] {
            display: none;
        }
    `,
    'twitterHideWhatsHappening': `
        [aria-label*="Trending now"] {
            display: none;
        }
    `,
    'twitterHideNotifications': `
        [aria-label="Notifications"] {
            display: none;
        }
    `,
    'twitterHideAllVanity': `
        [role="group"] {
            display: none;
        }
    `,
    'twitterHideLikes': `
        [href$="/likes"][href*="/status/"],
        [data-testid="like"],
        [data-testid="unlike"] {
            display: none;
        }
    `,
    'twitterHideRetweets': `
        [href$="/retweets"],
        [href$="/retweets/with_comments"],
        [data-testid="retweet"],
        [data-testid="unretweet"] {
            display: none;
        }
    `,
    'twitterHideReply': `
        [data-testid="reply"] { 
            display: none;
        }
    `,
    'twitterHideViewCount': `
        [aria-label*="View Tweet analytics"] {
            display: none;
        }
    `,
    'twitterHideFollowerFollowing': `
        [href$="/following"][dir][role="link"],
        [href$="/followers"][dir][role="link"] {
            display: none;
        }
    `
}

// aria-label="New Tweets are available. Push the period key to go to the them."

export const getElementCSS = (tag) => {
    return TWITTER_CSS[tag] || '';
}

