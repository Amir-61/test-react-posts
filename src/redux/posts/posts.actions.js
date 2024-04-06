import {postActionTypes} from './posts.actionTypes';

export const fetchPostStart = () => ({
  type: postActionTypes.FETCH_POSTS_START
})


export const fetchPostsSuccess = (postsObj) => ({
  type: postActionTypes.FETCH_POSTS_SUCCESS,
  payload: postsObj
})

export const fetchPostsFailure = (errorObj) => ({
  type: postActionTypes.FETCH_POSTS_FAILURE,
  payload: errorObj,
})

export const fetchPostsStartAsync = () => {
  return dispatch => {
    dispatch(fetchPostStart())
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setTimeout(()=>{
            dispatch(fetchPostsSuccess(result))
          }, 5000)
          
        },
        (error) => {
          dispatch(fetchPostsFailure(error))
        }
    )
}}
