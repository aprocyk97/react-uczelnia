import { combineReducers } from 'redux';

import users, { IUsersReducers } from './usersReducers';
import posts, { IPostsReducers } from './postsReducers';
import photos, { IPhotoReducers } from './photosReducers';

export default combineReducers({
    users,
    posts,
    photos
})

export interface IState {
    users: IUsersReducers;
    posts: IPostsReducers;
    photos: IPhotoReducers;
}