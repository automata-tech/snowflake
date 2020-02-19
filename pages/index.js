// @flow

import React from 'react'
import SnowflakeApp from '../components/SnowflakeApp'

type Props = {
  children: any,
}

type State = {
  error?: Error,
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error: Error) {
    this.setState({error});
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong: {this.state.error.message}</p>;
    }

    return this.props.children;
  }
}

// eslint-disable-next-line react/display-name
export default () => (
  <ErrorBoundary>
    <SnowflakeApp />
  </ErrorBoundary>
)
