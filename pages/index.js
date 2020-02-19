// @flow

import React from 'react'
import SnowflakeApp from '../components/SnowflakeApp'

type Props = {|
  ssr: boolean,
|}

type State = {|
  error?: Error,
|}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {error: undefined};
  }

  static getInitialProps({req}: {req?: any}): Props {
    return {ssr: !!req}
  }

  componentDidCatch(error: Error) {
    this.setState({error});
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong: {this.state.error.message}</p>;
    }
    return <SnowflakeApp ssr={this.props.ssr} />
  }
}

export default Page
