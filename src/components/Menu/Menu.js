import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'

import itensMenu from './ItensMenu.js'

import Logo from '../../images/logo.png'

import { FaUser } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"

import './Menu.css'

const Menu = () => {

    return (
        <div className='Menu'>
            <div className='divisao_topo_menu'>
                <NavLink to={'/'} className='logo_menu'>
                    <img className='imagem_logo_menu' src={Logo} alt='Logo' />
                    <p className='texto_logo_menu'>Do It</p>
                </NavLink>
                <nav className='Navegacao'>
                    <ul className='navegacoes'>
                        {itensMenu.map((item, id) => {
                            return (
                                <NavLink to={item.link} className={({ isActive }) => isActive ? "item_navegacao_ativo" : "item_navegacao"} key={id}>
                                    {item.icone}
                                    <li><p className='link_navegacao' href={item.link}>{item.nome}</p></li>
                                </NavLink>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className='menu_usuario'>
                <div className='divisao_usuario_menu'>
                    <FaUser className='foto_usuario_menu' />
                    <p className='nome_usuario_menu'>Felipe Pontin</p>
                </div>
                <NavLink to='/configuracoes' className='divisao_icone_usuario_menu'>
                    <FaEdit className='icone_usuario_menu' />
                </NavLink>
            </div>
        </div>
    )
}

export default Menu
