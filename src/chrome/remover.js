const BASE_REMOVER = (payload) => {
    if (payload.capture === 'querySelectorAll') {
        BULK_REMOVE(payload)
    } else if (payload.capture === 'querySelector') {
        SINGLE_REMOVE(payload)
    }

    return;
}

const SINGLE_REMOVE = (payload) => {
    console.log('SINGLE REMOVE')
    let element = document[payload.capture](payload.target);
    if (payload.remove) {
        HIDE_ELEMENT(payload.removeParent ? element.parentNode : element)
    } else {
        SHOW_ELEMENT(payload.removeParent ? element.parentNode : element)
    }
    return;
}

const BULK_REMOVE = (payload) => {
    console.log('BULK REMOVE', document[payload.capture](payload.target))
    document[payload.capture](payload.target).forEach(el => {
        console.log('BULK LOOP', el);
        if (payload.remove) {
            HIDE_ELEMENT(payload.removeParent ? el.parentNode : el)
        } else {
            SHOW_ELEMENT(payload.removeParent ? el.parentNode : el)
        }
    })
    return;
}

const SHOW_ELEMENT = (element) => {
    console.log("SHOW", element)
    element.style.display = ''
    return;
}

const HIDE_ELEMENT = (element) => {
    console.log("HIDE", element)
    element.style.display = 'none'
    return;
}

const PLATFORM_REMOVER = (payload) => {
    let platform = payload.id.split('_')[0];

    switch(platform) {
        case 'twitter': {
            return {
                BASE_REMOVER,
                hideFollowCount,
                hideChildAtNumber,
            }
        }
        default: 
            return null;
    }
}

const hideFollowCount = (payload) => {
    if (payload.remove) {
        HIDE_ELEMENT(document.querySelectorAll('[data-testid="UserName"]')[0].nextElementSibling.nextElementSibling.nextElementSibling)
    } else {
        SHOW_ELEMENT(document.querySelectorAll('[data-testid="UserName"]')[0].nextElementSibling.nextElementSibling.nextElementSibling)
    }
    return;
}

const BULK_REMOVE_FOR_CHILD = (payload) => {
    document[payload.capture](payload.target).forEach(el => {
        console.log('BULK LOOP', el);
        if (payload.remove) {
            HIDE_ELEMENT(el.querySelector(`:nth-child(${payload.childNumber})`))
        } else {
            SHOW_ELEMENT(el.querySelector(`:nth-child(${payload.childNumber})`))
        }
    })
    return;
}

const hideChildAtNumber = (payload) => {
    BULK_REMOVE_FOR_CHILD(payload)
}

export const DOM_Modifier = (payload) => {
    console.log('MODIFIED', payload);
    if (payload.customFunction) {
        console.log('MOD ENTER');
        PLATFORM_REMOVER(payload)[payload.customFunction](payload)
    } else {
        console.log('BASE ENTER')
        BASE_REMOVER(payload)
    }
    return;
}