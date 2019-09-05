import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'



const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />
    <Repos    className='repos' 
    title='Repositórios:'
    repos={[{
      name:'Nome do repositório',
      link:'#'
    }]} />
    <Repos    className='starred' 
    title='Repositórios:'
    repos={[{
      name:'Nome do repositório',
      link:'#'
    }]} />
  </div>
)

export default App