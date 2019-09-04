import React from 'react';

const Title = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Desconhecido',
            // lastname: 'Sem sobrenome'
            lastname: {
                first: 'Sem ',
                last: 'Sobrenome'
            }
        }
    },
    render: function () {

        return (
            <h1>Olá {
                this.props.name + ' ' + this.props.lastname.first +
                this.props.lastname.last
                }!</h1>
            // <h1>Olá {this.props.name || 'Desconhecido'}!</h1>
            // <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>
        )
    }
})

export default Title
