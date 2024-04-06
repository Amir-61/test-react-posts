import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {Container, Row, Col} from 'react-bootstrap';

import PostItem from '../postItem/postItem.component'

import { postsIsFetchingSelection } from '../../redux/posts/post.selectors'

const PostCollection = ({posts, fetchPostsStartAsync, isLoading}) => {
  useEffect(()=> {
    if(isLoading === undefined) {
      fetchPostsStartAsync()
    }
  }, [isLoading, fetchPostsStartAsync])

  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {Array.isArray(posts.collections) && posts.collections.length > 0 &&posts.collections.map((post) => (
            <div key={post.id}>
              <PostItem {...post}></PostItem>
            </div>
          ))}
          </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: postsIsFetchingSelection
})

export default connect(mapStateToProps)(PostCollection)

