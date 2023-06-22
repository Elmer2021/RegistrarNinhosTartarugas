import React, { Component } from 'react'
import styles from './TipoEspecie.module.css'
import TartaIcon from"../registrarNinhos/talu.jpeg"
import TartaComum from"../registrarNinhos/tartacomum.png"
import TartaPente from"../registrarNinhos/tartapente.jpg"
import { Link } from 'react-router-dom'
export default class TipoEspecies extends Component {
  render() {
    const divStyle = {
        backgroundImage: 'url("./registrarNinhos/tartu.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px',
      }; 
    return (
      <div style={divStyle}>
      
    <section className={styles.container}>
       
        <div className={styles.products} >
         <Link  to="/tverde">   <div className={styles.carts} >
            <div className='men'>
        <img src={TartaIcon} 
                     style={{
                        width: '250px',
                        height: '200px',
                        float:'left',
                        
                        //borderRadius: '50%',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }} alt=""/>
                      </div>
              
                <p > Tartaruga Verde</p>
              

          
      
            </div></Link>
            <Link to="/tcomum"><div className={styles.carts}>
       <img src={TartaComum} 
                     style={{
                        width: '250px',
                        height: '200px',
                        float:'left',
                        
                        //borderRadius: '50%',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }} alt=""/>
               
            <p > Tartaruga Comum ou Amarela</p>
              
                
                
            </div></Link> 
          <Link to="/tpente">  <div className={styles.carts}>
            <img src={TartaPente} 
                     style={{
                        width: '250px',
                        height: '200px',
                        float:'left',
                        
                        //borderRadius: '50%',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }} alt=""/>
               
                
            <p > Tartaruga de Pente ou Carapaça Levantada</p>
              
               
            </div></Link>
           
            </div>
    </section>
    </div>
        
    )
  }
}
