import React, { Component } from 'react'

class App extends Component {
    constructor () {
        super()
        this.state = {
            text: 'Wagner'
        }
    }
    render() {
        return (
            <div className='container' onClick={() => this.setState({
                text: 'Outro texto'
            })}>
               {this.state.text}
            </div>
        )
    }
}

export default App
