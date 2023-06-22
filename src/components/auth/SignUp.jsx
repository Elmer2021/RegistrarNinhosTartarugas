import React ,{useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
export const SignUp = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signUp =(e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {  
            console.log(userCredential)
        }).catch
        ((error)=>{
            console.log(error);
        })
    }
      
  return (
    <div className='sign-in-container'>
          <main className='centralize'>
        <form onSubmit={signUp}>
            
            <h1>Cadastra-se</h1>
            <label >Nome:</label>
            <input type="text" id="email" name="email" placeholder="Nome" ></input>
            <label >Apelido:</label>
            <input type="text" id="email" name="email" placeholder="Apelido" ></input>
            <label for="email">Email:</label>
            <div className='deu'>
            <p>Sexo:</p>
                <input type="radio" id="feminino" name="genero" value="feminino" required/>
                <label for="feminino">Feminino</label>
                <br/>
                <input type="radio" id="masculino" name="genero" value="masculino" required/>
                <label for="masculino">Masculino</label>
                <br/>
                <input type="radio" id="outro" name="genero" value="outro" required/>
                <label for="outro">Outro</label>
                </div>
            <input type="email" id="email" name="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <label for="email">Password:</label>
            <input type="password" id="password" name="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <button type='submit'>Sign Up</button>
        </form>
        </main>

    </div>
  )
}
