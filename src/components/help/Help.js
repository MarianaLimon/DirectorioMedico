import React, { Component } from 'react';
import './Help.css'

class Help extends Component {
    render() {
        return (
            <div className='help'>
                <h2 className='help-text'>
                    ¿No encuentras un consultorio cerca?<br />
                    Llámanos para ayudarte
                </h2>
                <h2 className='help-phone'>
                    800 366 3349
                </h2>
            </div>
        );
    }
}

export default Help;
