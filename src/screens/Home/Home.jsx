import React from "react";

//Mis componentes
import CardStateContainer from '../../components/cardStateContainer/CardStateContainer'
import Help from '../../components/help/Help';

//Archivo Json con los datos de los Doctores
import directorio from "../../assets/DataMedix/directorio.json";

export default function Home() {

  const filterOn = (id) => {
      console.log(id);
  }

  return (
      <div className="App">
          
          <h1><b>DIRECTORIO DE<br />MÉDICOS </b></h1>

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
      </div >
  );
}
