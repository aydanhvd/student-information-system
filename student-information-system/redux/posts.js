import fbApp from '../utils/FireBaseInit';
import { selectUser, selectProfilePiC, getAuthToken } from './auth';
//Action Types
const SET_FEEDS = 'SET_FEEDS';
const SET_POSTS = 'SET_POSTS';
const SET_ACTIVE_POSTS_ID = 'SET_ACTIVE_POSTS_ID';
const SET_POST_LIKES = "SET_POST_LIKES";

//Selectors
export const MODULE_NAME = 'feeds';
export const selectFeeds = (state) => state[MODULE_NAME].feeds;
export const selectPosts = (state) => state[MODULE_NAME].posts;
export const selectActivePosts = (state) => state[MODULE_NAME].activePostsID;
export const selectPostLikes = (state, id) =>
	state[MODULE_NAME].posts.find((post) => post.id === id)?.likes || {};

//Reducer
const initialState = {
	feeds: [],
	posts: [],
	activePostsID: '-MAWDvacjOM3q9QSesbc' //TODO not the best way fix this
};

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_FEEDS:
			return {
				...state,
				feeds: payload
			};
		case SET_POSTS:
			return {
				...state,
				posts: payload
			};
		case SET_ACTIVE_POSTS_ID:
			return {
				...state,
				activePostsID: payload
			};
		case SET_POST_LIKES:
			return {
				...state,
				posts: state.posts.map((post) => {
					if (post.id === payload.postID) {
						return {
							...post,
							likes: payload.likes,
						};
					}
					return post;
				}),
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
export const setPosts = (payload) => ({
	type: SET_POSTS,
	payload
});
export const setActivePosts = (payload) => ({
	type: SET_ACTIVE_POSTS_ID,
	payload
});
export const setPostLikes = (payload) => ({
	type: SET_POST_LIKES,
	payload,
});
//Middlewares

//a middleware for getting feeds(hedar of home screen)
export const getAndListenFeeds = () => (dispatch) => {
	try {
		const reference = fbApp.db.ref('feeds');
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const feedTitlesObj = snapshot.val();
					const feedTitlesArr = Object.keys(feedTitlesObj).map((key) => ({
						ID: key, //use uppercase for ids
						...feedTitlesObj[key]
					}));
					dispatch(setFeeds(feedTitlesArr));
				}
			},
			(err) => {
				console.log('getAndListenFeeds err', err);
			}
		);
		return () => reference.off();
	} catch (err) {
		console.log('getAndListenFeeds', err);
		//TODO handle errors
	}
};
//a middleware for getting posts(posts in home screen users share)
export const getAndListenPosts = (feedID) => (dispatch) => {
	try {
		const reference = fbApp.db.ref(`posts/${feedID}`);
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const postsObj = snapshot.val();
					const postsArr = Object.keys(postsObj).map((key) => ({
						ID: key, //use upperase for ids
						...postsObj[key]
					}));
					dispatch(setPosts(postsArr));
				}
			},
			(err) => {
				console.log('getAndListeToPosts part 1 err', err);
			}
		);
		return () => reference.off();
	} catch (err) {
		console.log('getAndListeToPosts err', err);
		//TODO handle errors
	}
};

// a middleware for shareing posts in home screen
export const shareNewPost = (feedID, text) => (dispatch, getState) => {
	try {
		const user = selectUser(getState());
		const profilePic = selectProfilePiC(getState());
		const reference = fbApp.db.ref(`posts/${feedID}`);

		//const newPostID = reference.push().key;//use uppercase for IDs
		const newPost = {
			auther: user.name,
			userName: user.userName,
			autherID: user.userID, //use uppercase for IDS
			time: fbApp.root.database.ServerValue.TIMESTAMP,
			autherProfilePic: profilePic,
			text
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

export const toggleLike = ({ feedID, userID, isLiked }) => async (
	dispatch,
	getState
) => {
	try {
		const token = getAuthToken(getState());

		const likesURL = fbApp.db.ref(`posts/${feedID}/likes`);
		await fetch(`${likesURL}/${userID}.json?auth=${token}`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: isLiked ? "DELETE" : "PUT",
			body: JSON.stringify(true),
		});

		const likesResponse = await fetch(`${likesURL}.json?auth=${token}`);
		const likes = await likesResponse.json();
		if (!likes?.error) {
			dispatch(
				setPostLikes({
					feedID,
					likes,
				})
			);
		}

	} catch (err) {
		console.log("toggleLike err", err);
	}
};
