import React, { Component } from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: 'Wagner dos Santos',
        repos: 20,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'Repo',
        link:'#'
      }],
      starred: [{
        name: 'Repo',
        link:'#'
      }]

    }
  }

  render() {
    return <AppContent 
    userinfo={this.state.userinfo}
    repos={this.state.repos}
    starred={this.state.starred}
    />
  }
}

export default App