const youtube_DisableAutoplay = () => {
    window.onload = () => {
        if ((document.querySelector('button[aria-label*="Autoplay"]')?.firstChild?.firstChild as HTMLElement).ariaChecked === 'false') {
            (document.querySelector('button[aria-label*="Autoplay"]') as HTMLElement).click()
        }
    };

    if (document.readyState === "complete") {
        if ((document.querySelector('button[aria-label*="Autoplay"]')?.firstChild?.firstChild as HTMLElement).ariaChecked === 'false') {
            (document.querySelector('button[aria-label*="Autoplay"]') as HTMLElement).click()
        }
    }
}

const instagram_HideNotifications = (action: ActionType) => {
    (document.querySelectorAll('[href$="#"][role="link"]')[1] as HTMLElement).style.display = (action === 'hide' ? 'none' : '')
}

const instagram_HideHomeFeed = (action: ActionType) => {
    (document.getElementsByTagName('section')[1]?.firstChild?.lastChild as HTMLElement).style.display = (action === 'hide' ? 'none' : '')
}

type ActionType = 'hide' | 'undo'

type CustomFunctionType = Record<string, (action: ActionType) => void>

let customFunctions: CustomFunctionType = {
    'youtube_DisableAutoplay': youtube_DisableAutoplay,
    'instagram_HideNotifications': instagram_HideNotifications,
    'instagram_HideHomeFeed': instagram_HideHomeFeed
}

export default customFunctions