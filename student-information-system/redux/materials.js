import fbApp from '../utils/FireBaseInit';
//Action Types
const SET_GROUPS = 'SET_GROUPS';
const SET_MATERIALS = 'SET_MATERIALS';
const SET_ACTIVE_GROUP_ID = 'SET_ACTIVE_GROUP_ID';

//Selectors
export const MODULE_NAME = 'groups';
export const selectGroups = (state) => state[MODULE_NAME].groups;
export const selectMaterials = (state) => state[MODULE_NAME].materials;
export const selectActiveGroup = (state) => state[MODULE_NAME].activeGroup;

//Reducer
const initialState = {
    groups: [],
    materials: [],
    activeGroup: `-MAWE1GqdEzb77P4wMVS`,
};



export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_GROUPS:
            return {
                ...state,
                groups: payload
            };
        case SET_MATERIALS:
            return {
                ...state,
                materials: payload
            };
        case SET_ACTIVE_GROUP_ID:
            return {
                ...state,
                activeGroup: payload
            };
        default:
            return state;
    }
}

//ActionCreators

export const setGroups = (payload) => ({
    type: SET_GROUPS,
    payload
});
export const setMaterials = (payload) => ({
    type: SET_MATERIALS,
    payload
});
export const setActiveGroup = (payload) => ({
    type: SET_ACTIVE_GROUP_ID,
    payload

});


//Middlewares

//a middleware for getting groups on material screen
export const getAndListenGroups = () => (dispatch) => {
    try {
        const reference = fbApp.db.ref('groups');
        reference.on(
            'value',
            (snapshot) => {
                if (snapshot.exists()) {
                    const groupTitlesObj = snapshot.val();
                    const groupTitlesArr = Object.keys(groupTitlesObj).map((key) => ({
                        ID: key, //use uppercase for ids
                        ...groupTitlesObj[key]
                    }));
                    dispatch(setGroups(groupTitlesArr));
                }
            },
            (err) => {
                console.log('getAndListenGroups err', err);
            }
        );
        return () => reference.off();
    } catch (err) {
        console.log('getAndListenGroups', err);
        //TODO handle errors
    }
};

//a middleware for getting titles of materials in material screen
export const getAndListenMaterials = (groupID) => (dispatch) => {
    try {
        const reference = fbApp.db.ref(`materials`);
        reference.on(
            'value',
            (snapshot) => {
                if (snapshot.exists()) {
                    const materialsObj = snapshot.val();
                    const materialsArr = Object.keys(materialsObj).map((key) => ({
                        ID: key, //use upperase for ids
                        ...materialsObj[key]
                    }));
                    dispatch(setMaterials(materialsArr));
                }
            },
            (err) => {
                console.log('getAndListToMaterials part 1 err', err);
            }
        );
        return () => reference.off();
    } catch (err) {
        console.log('getAndListToMaterials err', err);
        //TODO handle errors
    }
};

// a middleware for shareing posts in home screen
export const createMaterial = (groupID, title, link) => (dispatch, getState) => {
    try {
         // const user = selectUser(getState());
        // const profilePic = selectProfilePiC(getState());
        const reference = fbApp.db.ref(`materials/-MAWEK84WckMvCne8onF`);

         // const newPostID = reference.push().key;//use uppercase for IDs
        const newPost = {
            title,
            link
        };
        reference.push().set(newPost, (err) => {
            if (err) {
                console.log('shareNewPost err', err);
                //TODO handle errors
            }
        });
    } catch (err) {
        console.log('sharePost err', err);
    }
};
