import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import { BsYoutube } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='about'>
                        <div className='logo'>
                            <img src='./img/logo.png' alt='logo' width='50px' /><p>Multitiendas E.A.F</p>
                        </div>
                        <div className='detail'>
                            <p>Somos vendedores mayoristas de la mejor mercancia seleccionada</p>
                            <div className='icon'>
                                <li><RiFacebookFill /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><BsYoutube /></li>
                            </div>
                        </div>
                    </div>
                    <div className='account'>
                        <h3>Mi Cuenta</h3>
                        <ul>
                            <li>Perfil</li>
                            <li>Ordenes</li>
                            <li>Carrito</li>
                            <li>Envios</li>
                            <li>Volver</li>
                        </ul>
                    </div>
                    <div className='page'>
                        <h3>Paginas</h3>
                        <ul>
                            <li>Inicio</li>
                            <li>Sobre Nosotros</li>
                            <li>Contactos</li>
                            <li>Terminos y Condiciones</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer