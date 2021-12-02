import React from 'react';

interface Props {
  fallback: JSX.Element;
}

class ErrorBoundary extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return this.props.fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
