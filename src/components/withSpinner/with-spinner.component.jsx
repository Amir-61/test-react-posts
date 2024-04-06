import React from 'react';
import { useSelector } from 'react-redux';
import { postsIsFetchingSelection } from '../../redux/posts/post.selectors';

import './with-spinner.styles.scss';

const Spinner = ({ WrappedComponent, ...otherProps }) => {
  const isLoading = useSelector(postsIsFetchingSelection);

  return isLoading ? (
    <div className='SpinnerOverlay'>
      <div className='SpinnerContainer' />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

const WithSpinner = (WrappedComponent) => {
  return (props) => <Spinner WrappedComponent={WrappedComponent} {...props} />;
};

export default WithSpinner;
