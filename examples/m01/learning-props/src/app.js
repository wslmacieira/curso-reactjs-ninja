import React from 'react' 
import Title from './title'

const App = React.createClass({
    render: function () {
        return (
            <div className='container'>
                <Title name='Wagner' />
                {/* <Title name='Wagner' lastname={{first: 'Li', last: 'ma'}} /> */}
            </div>
        )
    }
})

export default App
