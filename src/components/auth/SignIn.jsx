import React ,{useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
//import styles from './SignIn.module.css'
import TartaIcon from"../../cabecalho/g5.png"

export const SignIn = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signIn =(e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {  
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error);
        })
    }
   

      
  return (
    <div className='sign-in-container'>
          <div className='men'>
        <img src={TartaIcon} 
                     style={{
                        width: '800px',
                        height: '600px',
                        float:'left',
                        
                        //borderRadius: '50%',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }} alt=""/>
                      </div>
    <main className='centralize'>
        
        <form onSubmit={signIn}>
          
            <h1>Log In</h1>
            <input type="email" id="email" name="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <input type="password" id="password" name="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <Link to="/" ><button  type='submit'>  <Link to="/"></Link>Log In</button></Link>
           <Link to="/register">Cadastrar-se</Link>
         
        </form>
        <div>
          <FaFacebook/> 
          <FaInstagram/>
          <FaLinkedin/>
        </div>
        </main>

    </div>
  )
}
