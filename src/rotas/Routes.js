import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { SignUp } from '../components/auth/SignUp'
import { SignIn } from '../components/auth/SignIn'
//import { SignIn } from '../components/auth/SignIn'
//import AuthDetails from '../components/AuthDetails';
import Home from '../components/Home';
import RegistarNinhos from '../components/registrarNinhos/RegistarNinhos';
import Especies from '../components/registrarNinhos/Especies';
import TartarugaVerde from '../components/registrarNinhos/TartarugaVerde';
import TartarugaComum from '../components/registrarNinhos/TartarugaComum';
import Tartarugapente from '../components/registrarNinhos/Tartarugapente';



export default class routes extends Component {
  render() {
    return (
        <Router>
   
     
      
          <Routes>
             <Route path="/" element={<Home/>} />
              <Route path="/register" element={<SignUp/>} />
              <Route path="/login" element={<SignIn/>} />
              <Route path="/ninho" element={<RegistarNinhos/>} />
              <Route path="/especie" element={<Especies/>} />
              <Route path="/tverde" element={<TartarugaVerde/>} />
              <Route path="/tcomum" element={<TartarugaComum/>} />
              <Route path="/tpente" element={<Tartarugapente/>} />
         

         </Routes>
    
         </Router>
    )
  }
}
