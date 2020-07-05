import fbApp from '../utils/FireBaseInit';
import { selectAuthGroup } from './auth';
//Action Types
const SET_GROUP = 'SET_GROUP';
const SET_MATERIALS = 'SET_MATERIALS';

//Selectors
export const MODULE_NAME = 'groups';
export const selectGroup = (state) => state[MODULE_NAME].group;
export const selectMaterials = (state) => state[MODULE_NAME].materials;

//Reducer
const initialState = {
    group: [],
    materials: [],
};



export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_GROUP:
            return {
                ...state,
                group: payload
            };
        case SET_MATERIALS:
            return {
                ...state,
                materials: payload
            };
        default:
            return state;
    }
}

//ActionCreators

export const setGroup = (payload) => ({
    type: SET_GROUP,
    payload
});
export const setMaterials = (payload) => ({
    type: SET_MATERIALS,
    payload
});


//Middlewares

//a middleware for getting groups on material screen
export const getAndListenGroup = () => (dispatch , getState) => {
    try {
        const groupID = selectAuthGroup(getState())
        const reference = fbApp.db.ref(`groups/${groupID}`);
        reference.on(
            'value',
            (snapshot) => {
                if (snapshot.exists()) {
                    const groupTitlesObj = snapshot.val();
                    dispatch(setGroup(groupTitlesObj));
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
        const reference = fbApp.db.ref(`materials/${groupID}`);
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
