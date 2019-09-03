import React  from 'react'
import {render as renderizacao} from './react-dom'

import Title from './app'

renderizacao(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)
