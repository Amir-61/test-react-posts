import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {Container, Row, Col} from 'react-bootstrap';
import { fetchPostsStartAsync } from '../../redux/posts/posts.actions';
import { postsDataSelection, postsIsFetchingSelection } from '../../redux/posts/post.selectors'

import PostItem from '../postItem/postItem.component'
import WithSpiner from '../withSpinner/with-spinner.component'

const PostCollection = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsDataSelection);
  const isLoading = useSelector(postsIsFetchingSelection);
  useEffect(()=> {
    if(isLoading === undefined) {
      dispatch(fetchPostsStartAsync())
    }
  }, [])

  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {Array.isArray(posts.collections) && posts.collections.length > 0 && posts.collections.map((post) => (
            <div key={post.id}>
              <PostItem {...post}></PostItem>
            </div>
          ))}
          </Col>
      </Row>
    </Container>
  )
}


export default WithSpiner(PostCollection)

