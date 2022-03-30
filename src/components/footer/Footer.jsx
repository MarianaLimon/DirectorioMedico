import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='legals pt-5 '>
                                El presente directorio de "médicos" se publica como relación de servicios profesionales independientes,
                                donde se expone por este medio de manera informativa y de cada uno de ellos se exponen sus datos personales
                                de contacto y breve antecedente profesional; por tal motivo, el detalle de su información así como desempeño
                                de sus actividades profesionales de atención y consulta, será responsabilidad de ellos mismos y no del que
                                lo publica; por lo cual pedimos que cualquier comentario o anomalía al respecto sea informado a la brevedad
                                al correo <a href='mailto:soporte@losdoctores.mx'><b>soporte@losdoctores.mx</b></a>
                            </p>
                            <p className='legals'>
                                El responsable del presente portal revisa a cada uno de los profesionales de la salud que en el presente se
                                publique para confirmar su capacidad y certificación profesional, contando con los datos de cédula profesional
                                de correo <a href='mailto:soporte@losdoctores.mx'><b>soporte@losdoctores.mx</b></a> con el fin de conservar la calidad de nuestros servicios.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <p>Legales</p>
                <ul className='legales'>
                    <li><a href='https://medix.com.mx/aviso-legal/'>Aviso Legal</a></li>
                    <li><a href='https://medix.com.mx/politica-de-privacidad/'>Política de Privacidad</a></li>
                    <li><a href='https://medix.com.mx/terminos-y-condiciones/'>Terminos de Uso</a></li>
                </ul>
                <p><a href='https://medix.com.mx/contacto/'>Contacto</a></p> */}
                <ul className='legales pt-4'>
                    <li><a href='/aviso-de-privacidad/'><b>Aviso de Privacidad</b></a></li>
                </ul>
            </div>
        )
    }
}

export default Footer;

