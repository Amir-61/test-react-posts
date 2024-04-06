import { connect } from 'react-redux'
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../withSpinner/with-spinner.component';
import { postsDataSelection, postsIsFetchingSelection } from '../../redux/posts/post.selectors'
import { fetchPostsStartAsync } from '../../redux/posts/posts.actions';
import PostCollection from './postCollection.component'

const mapStateToProps = createStructuredSelector({
  posts: postsDataSelection,
  isLoading: postsIsFetchingSelection
})

const mapDispatchToProps = (dispatch) => ({
  fetchPostsStartAsync: () => dispatch(fetchPostsStartAsync())
});

const PostCollectionsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner
)(PostCollection);

export default PostCollectionsContainer;