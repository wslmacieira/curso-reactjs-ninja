import React from 'react';

// import { Container } from './styles';

const UserInfo = () => (
    <div className="user-info">
        <img src='https://avatars2.githubusercontent.com/u/52054965?v=4' alt="" />
        <h1 className='username'>
            <a href="https://github.com/wslmacieira">Wagner dos santos</a>
        </h1>

        <ul className="repos-info">
            <li>Repositórios: 100</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 10</li>
        </ul>
    </div>
)

export default UserInfo;
