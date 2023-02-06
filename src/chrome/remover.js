export const DOM_Modifier = (payload) => {
    if (payload.remove) {
        document[payload.capture](payload.target).style.display = 'none'
    } else {
        document[payload.capture](payload.target).style.display = ''
    }
}
