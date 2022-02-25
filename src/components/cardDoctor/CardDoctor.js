import React, { Component } from 'react';
import './CardDoctor.css'

class CardDoctor extends Component {
    render() {

        return (
            <div className={`content-state ${this.props.className}`} key={this.props.id + '_cont'}>
                {
                    this.props.doctors.map((dr, i) => {
                        return (
                            <div key={i + '_dr_info'} className='info-dr'>
                                <p key={i + '_dr_n'} className="data-dr"><span>Médico: </span>{dr.doctor_name}</p>
                                <p key={i + '_dr_p'} className="data-dr"><span>Teléfono: </span>{dr.phone}</p>
                                <p key={i + '_dr_c'} className="data-dr"><span>C.P.:</span>{dr.cp}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default CardDoctor;
