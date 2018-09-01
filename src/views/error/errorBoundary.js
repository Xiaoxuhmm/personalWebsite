import React, {Component} from 'react';
import {Image} from '../../components/globals/index';
import {
  ErrorWrapper,
  InfoWrapper
} from './style';
import {
  CLOUDINARY_URL,
  GLOBAL_PATH
} from '../../api/index';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: true
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.error) {
      const errorImageUrl = CLOUDINARY_URL + GLOBAL_PATH + 'oops.png';
      // Error path
      return (
        <ErrorWrapper>
          <InfoWrapper>
            <Image src={errorImageUrl} alt={"Opps!"} />
          </InfoWrapper>
        </ErrorWrapper>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
