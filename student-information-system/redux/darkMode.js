//Action Types
const THEME_SET = 'THEME_SET';

//Selectors
export const MODULE_NAME = 'darkMode';
export const selectTheme = (state) => state[MODULE_NAME].themes;

//Reducer
const initialState = {
    themes: [],
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case THEME_SET:
            return {
                ...state,
                themes: [ ...state.themes, payload ]
            };
        default:
            return state;
    }
}
//ActionCreators

export const setTheme = (payload) => ({
    type: THEME_SET,
    payload
});
