import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/App.css';

//Mis componentes
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';

//Screens
import Home from './screens/Home/Home';
import Aviso from './screens/Legales/Aviso'; 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/aviso-de-privacidad/" element={<Aviso />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      
    );
  }
}

export default App;
