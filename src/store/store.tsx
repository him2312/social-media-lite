export type Theme =  'dark' | 'light'

export type ContentThemePropsType = {
    currentTheme: Theme
};

export type State = {
    theme: Theme
}

export type DISPATCH_TYPE = 'CHANGE_THEME'

export type Action = {
    type: DISPATCH_TYPE,
    payload: any
}

export const initialState: State = {
    theme: 'dark'
}

export const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload
            }
        default: 
            return state;
    }
}