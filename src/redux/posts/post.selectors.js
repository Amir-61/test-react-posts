import {createSelector} from 'reselect'

const postsSelector = (state) => state.posts;

export const postsDataSelection = createSelector(
  [postsSelector],
  (posts) => posts
)

export const postsIsFetchingSelection = createSelector(
  [postsSelector],
  (posts) => posts.isFetchLoading
)
