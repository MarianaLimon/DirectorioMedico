import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';/* 
import React, { useState, useEffect } from 'react'; */

//Mis componentes
import Banner from './components/banner/Banner';
import CardStateContainer from './components/cardStateContainer/CardStateContainer'
import Help from './components/help/Help';
import Footer from './components/footer/Footer';

import directorio from "./assets/DataMedix/directorio.json";

function App() {

  const filterOn = (id) => {
    console.log(id);
  }

  return (
    <div className="App">
      <Banner />
      <h1><b>DIRECTORIO DE<br />MÉDICOS MEDIX </b></h1>

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {directorio.states.map(({ state_name, doctors }, index) => {
              const i = index;
              return (
                <CardStateContainer filterOn={filterOn} index={index} state_name={state_name} doctors={doctors} />
              )
            })}
          </div>
        </div>
      </div>

      <Help />
      <Footer />
    </div >
  );
}

export default App;
