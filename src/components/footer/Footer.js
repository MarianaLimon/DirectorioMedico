import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p>Legales</p>
                <ul className='legales'>
                    <li><a href='https://medix.com.mx/aviso-legal/'>Aviso Legal</a></li>
                    <li><a href='https://medix.com.mx/politica-de-privacidad/'>Política de Privacidad</a></li>
                    <li><a href='https://medix.com.mx/terminos-y-condiciones/'>Terminos de Uso</a></li>
                </ul>
                <p><a href='https://medix.com.mx/contacto/'>Contacto</a></p>
            </div>
        )
    }
}

export default Footer;

