import React, { Component } from 'react'
import styles from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
        <>
        <footer className={styles.footer}>
        <div class="containere">
            <div class="row">
                <div className={styles.footer_col}>
                    <h4>Minha Conta</h4>
                    <ul>
                        <li>Conecte-se</li>
                        <li>Registro</li>
                        <li>Publique um Trabalho</li>
                      
                    </ul>
                </div>
                
            </div>
            
            <div className={styles.ya}>
                
                <div className={styles.de}>
                           2022 Todos os direitos reservados 
                        </div>
           
        </div>
        </div>
       
   </footer>
   </>

)


  }
}
