const youtube_DisableAutoplay = () => {
    window.onload = () => {
        if (document.querySelector('button[aria-label*="Autoplay"]')?.firstChild?.firstChild?.ariaChecked === 'false') {
            document.querySelector('button[aria-label*="Autoplay"]').click()
        }
    };

    if (document.readyState === "complete") {
        if (document.querySelector('button[aria-label*="Autoplay"]')?.firstChild?.firstChild?.ariaChecked === 'false') {
            document.querySelector('button[aria-label*="Autoplay"]').click()
        }
    }
}

const instagram_HideNotifications = (action) => {
    document.querySelectorAll('[href$="#"][role="link"]')[1].style.display = (action === 'hide' ? 'none' : '')
}

const instagram_HideHomeFeed = (action) => {
    document.getElementsByTagName('section')[1].firstChild.lastChild.style.display = (action === 'hide' ? 'none' : '')
}

let customFunctions = {
    'youtube_DisableAutoplay': youtube_DisableAutoplay,
    'instagram_HideNotifications': instagram_HideNotifications,
    'instagram_HideHomeFeed': instagram_HideHomeFeed
}

export default customFunctions