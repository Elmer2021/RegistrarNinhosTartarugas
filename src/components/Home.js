import React, { Component } from 'react'
import Cabecalho from '../cabecalho/Cabecalho'
//import Footer from './Footer'
import styles from './Home.module.css'
import TartaComum from"../components/g5.png"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Cabecalho/>
        <div className={styles.hero}>
        <img src={TartaComum} 
                     style={{
                        width: '100%',
                        height: '500px',
                        float:'left',
                        
                        //borderRadius: '50%',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }} alt=""/>
        </div>
    
      </div>
     
    )
  }
}
