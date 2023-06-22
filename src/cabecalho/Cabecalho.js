import React, { Component } from 'react'
import TartaIcon from"./g5.png"
import styles from './Cabecalho.module.css'
import { Link } from 'react-router-dom'
import {FaRegUser} from 'react-icons/fa'

export default class Cabecalho extends Component {
  render() {
    return (
      <div>
          <header>
                <nav className={styles.cue} >
                    <img className={styles.pointclik} src={TartaIcon} 
                     style={{
                        width: '100px',
                        height: '80px',
                        borderRadius: '50%',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }} alt=""/>

                    <h1 className={styles.titulok}>Tartaruga De Cabo Verde</h1>

                    
                       <Link to="/home"> <li>Pagina Inicial</li></Link>
                       <Link to="/especie"> <li >Especies</li> </Link>
                        <Link to="/ninho"> <li >Registrar Ninhos</li></Link>
                        <Link to="/login"> <FaRegUser/></Link>
                        
                    

                </nav>
            </header>
       
        </div>
  
    )
  }
}
