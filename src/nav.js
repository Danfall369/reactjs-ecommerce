import React from 'react'
import './nav.css'
import { FaMotorcycle } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { CiLogin, CiLogout } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Nav = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            <div className='free'>
                <div className='icon'>
                    <FaMotorcycle />
                </div>
                <p>Envio GRATIS en compras mayores de 20$</p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='./img/logo.png' alt='logo' width='50px' />
                    </div>
                    <div className='search_box'>
                        <input type='text' value='' placeholder='Ingresa el Nombre del Producto' autoComplete='off' />
                        <button>Buscar</button>
                    </div>
                    <div className='icon'>
                        {
                            isAuthenticated &&
                            (
                                <div className='account'>
                                    <div className='user_icon'>
                                        <AiOutlineUser />
                                    </div>
                                    <p>Hola, {user.name}</p>
                                </div>
                            )
                        }

                        <div className='second_icon'>
                            <Link to="/" className='link' ><AiOutlineHeart /></Link>
                            <Link to="/cart" className='link' ><BsBagCheck /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Producto</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>Sobre Nosotros</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contactanos</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                        {
                            isAuthenticated ?
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                                :
                                <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav