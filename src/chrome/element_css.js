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
    'youtube_HideMoreFromYoutube': `html[data-youtube_-hide-more-from-youtube="true"] #sections > ytd-guide-section-renderer:nth-child(4) {
        display: none !important;
    }`,
}

const INSTAGRAM_CSS = {
    // 'instagram_HideHomeFeed': `.x9f619 {
    //     display: none !important;
    // }`,
    'instagram_HideStories': `[role="menu"] {
        display: none !important;
    }`,
    'instagram_HideExplore': `[href$="/explore/"] {
        display: none !important;
    }`,
    'instagram_HideReels': `[href$="/reels/"] {
        display: none !important;
    }`,
    'instagram_HideMessages': `[href$="/direct/inbox/"] {
        display: none !important;
    }`,
    'instagram_HideAllVanity': `div:has(> [href$="/liked_by/"][role="link"]) {
        display: none !important;
    }`,
    'instagram_HidePostDetails': `[role="presentation"] > div > div > ._ab8w, form {
        display: none !important;
    }`,
    'instagram_HideSuggestionsForYou': `._aak3 {
        display: none !important;
    }`
}

const GMAIL_CSS = {
    'mail.google_HideAllEmail': `.AO {
        display: none !important;
    }`,
    'mail.google_HideAllRead': `.yO {
        display: none !important;
    }`,
    'mail.google_HideAllUnread': `.zE {
        display: none !important;
    }`,
    'mail.google_HideLeftBar': `[role="navigation"] {
        display: none !important;
    }`,
    'mail.google_HideSearch': `[role="banner"] {
        display: none !important;
    }`,
    'mail.google_HidePromotions': `td[role="heading"]:nth-of-type(2){
        display: none !important;
    }`,
    'mail.google_HideSocial': `td[role="heading"]:nth-of-type(3){
        display: none !important;
    }`
}

const LINKEDIN_CSS = {
    'linkedin_HideFeed': `.scaffold-finite-scroll {
        display: none !important;
    }`,
    'linkedin_HideTopBar': `#global-nav {
        display: none !important;
    }

    .authentication-outlet {
        padding-top: 0px;
    }
    `,
    'linkedin_HideNews': `div:has(> #feed-news-module){
        display: none !important;
    }`,
    'linkedin_HideJobs': `[href$="/jobs/?"]{
        display: none !important;
    }`,
    'linkedin_HideNotifications': `[href$="/notifications/?"]{
        display: none !important;
    }`,
    'linkedin_HideNetwork': `[href$="/mynetwork/?"]{
        display: none !important;
    }`,
    'linkedin_HideAllVanity': `.social-details-social-counts {
        display: none !important;
    }`,
    'linkedin_HideAllActions': `.feed-shared-social-actions {
        display: none !important;
    }`,
    'linkedin_HideMessaging': `#msg-overlay, [href$="/messaging/?"]{
        display: none !important;
    }`,
    'linkedin_HideAdvertisement': `.ad-banner {
        display: none !important;
    }`,
    'linkedin_HidePostInfo': `.feed-shared-update-v2__comments-container, .update-components-header {
        display: none !important;
    }`,
    'linkedin_HideSideBar': `.scaffold-layout__sidebar, .scaffold-layout__aside {
        display: none !important;
    }`,
    'linkedin_HideWritePost': `.share-box-feed-entry__closed-share-box{
        display: none !important;
    }`
}


export const getElementCSS = (tag) => {
    if (String(tag).startsWith('twitter')) {
        return TWITTER_CSS[tag] || '';
    } else if (String(tag).startsWith('youtube')) {
        return YOUTUBE_CSS[tag] || '';
    } else if (String(tag).startsWith('instagram')) {
        return INSTAGRAM_CSS[tag] || ''
    } else if (String(tag).startsWith('mail.google')) {
        return GMAIL_CSS[tag] || ''
    } else if (String(tag).startsWith('linkedin')) {
        return LINKEDIN_CSS[tag] || ''
    }
}

