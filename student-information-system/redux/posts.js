import fbApp from '../utils/FireBaseInit';
//Axtion Types
const SET_FEEDS = 'SET_FEEDS';
//Selectors
export const MODULE_NAME = 'feeds';
export const selectFeeds = (state) => state[MODULE_NAME].feeds;

//Reducer
const initialState = {
	feeds: [],
	posts: []
};

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_FEEDS:
			return {
				...state,
				feeds: payload
			};
		default:
			return state;
	}
}

//ActionCreators

export const setFeeds = (payload) => ({
	type: SET_FEEDS,
	payload
});

//Middlewares

//a middleware for getting feeds(hedar of home screen)
export const getAndListenFeeds = () => (dispatch) => {
	try {
		const reerence = fbApp.db.ref('feeds');
		reerence.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const feedTitlesObj = snapshot.val();
					const feedTitlesArr = Object.keys(feedTitlesObj).map((key) => ({
						id: key, //use lovercase for ids
						...feedTitlesObj[key]
					}));
					dispatch(setFeeds(feedTitlesArr));
				}
			},
			(err) => {
				console.log('getAndListenFeeds err', err);
			}
		);
		return () => reerence.off();
	} catch (err) {
		console.log('getAndListenFeeds', err);
		//TODO handle errors
	}
};
