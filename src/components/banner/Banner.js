import React, { Component } from 'react';
import './Banner.css';
import logo from '../../assets/images/logo.png';
import modelo from '../../assets/images/mujer.png';
/* import esferas from '../../assets/images/bolitas.png'; */

class Banner extends Component {

    render() {

        return (
            <section id="header">
                <div className="container">
                    <div className="row">

                        <div id="col-one" className='col-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='block h-100 '>
                                <div className='centered'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='animated slideInRight content col-sm-12 col-md-12 col-lg-9'>
                                                <a href='https://medix.com.mx/'>
                                                    <img src={logo} id="logo" alt='banner-directorio-medix-logo' />
                                                </a>
                                                <div id="introtext" className="col-sm-12 col-md-12 col-lg-12">
                                                    <h2 className='title-banner'>
                                                        ¿Buscas<br />
                                                        asesoría médica<br />
                                                        para lograr
                                                        tus <br /><span>objetivos</span>?
                                                    </h2>
                                                    <p className='text-banner'>Encuentra aquí el especialista más<br /> cercano.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="col-two" className='col-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='block'>
                                <div className='container'>
                                    <div className='row'>
                                        <img src={modelo} className='banner-modelo' alt='banner-directorio-medix-modelo' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}

export default Banner;
