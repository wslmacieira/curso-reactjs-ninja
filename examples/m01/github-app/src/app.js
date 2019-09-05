import React from 'react'

const App = () => (
  <div className='app'>
    <div className="search">
      <input type="search" 
      placeholder='Digite o nome do usuario no Github'/>
    </div>
    <div className="user-info">
      <img src='https://avatars2.githubusercontent.com/u/52054965?v=4' alt="" />
      <h1>
        <a href="https://github.com/wslmacieira">Wagner dos santos</a>
        </h1>

      <ul className="repos-info">
        <li>Repositórios: 100</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>

      <div className="actions">
        <button>Ver Repositórios</button>
        <button>Ver Favoritos</button>
      </div>

      <div className="repos">
        <h2>Repositórios:</h2>
        <ul>
          <li><a href="#">Nome do Repositório</a></li>
        </ul>
      </div>

      <div className="starred">
        <h2>Favoritos:</h2>
        <ul>
          <li><a href="#">Nome do Repositório</a></li>
        </ul>
      </div>

    </div>
  </div>
)

export default App