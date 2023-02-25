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

let customFunctions = {
    'youtube_DisableAutoplay': youtube_DisableAutoplay
}

export default customFunctions