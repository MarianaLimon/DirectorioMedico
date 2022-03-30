import React, { useState } from 'react';
import CardDoctor from '../cardDoctor/CardDoctor';
import './CardStateContainer.css'

function CardStateContainer(props) {
    const [show, setShow] = useState(false);
    console.log(show);

    const lo = (index) => { props.filterOn(index); }

    return (<div className='card-state'>
        <button type="button" id={props.index + '_b'} onClick={(e) => { setShow(!show); lo(props.index); }} className="title-state">
            {props.state_name}
        </button>
        {
            <CardDoctor key={props.index} doctors={props.doctors} id={props.index} className={show ? 'on' : 'off'} />
        }
    </div>)
}

export default CardStateContainer