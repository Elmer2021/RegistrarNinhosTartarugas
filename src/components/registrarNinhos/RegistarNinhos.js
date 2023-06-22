import React, { useEffect } from 'react'
//import {useHistory} from 'react-router-dom'
import {useState} from 'react'
//import styles from '.registrarNinhos/RegistarNinhos.module.css'
import styles from './RegistrarNinhos.module.css'
import Input from './Input'
import Select from './Select'
import SubmitButton from './SubmitButton'

function RegistrarNinhos(){


 
    const [categories,setCategories]=useState([])
useEffect( () =>{
  fetch("http://localhost:7000/categories",{
    method: "GET",
    headers:{
      'Content-Type':'aplication/json'

    }

  }).then((resp) => resp.json()).then((data) => {
    setCategories(data)
  }).catch((err) => console.log(err))
},[]

)
    return (
      <div className={styles.newprojet_container}>
        <h1 >Registrar Ninhos</h1>
        <p>Adiciona seus dados recolhidos</p>

        <form className={styles.form}>
          
       <div>
          <Input />
          </div>
          <div>
          <input type="number" name="password" placeholder="Nr Ovos" ></input>
          </div>

          <h1 >Cordenadas</h1>
          <label>Longitude</label>
          <div>
          <input type="number" name="password" placeholder="Nr Ovos" ></input>
          </div>
          <label>Latitude</label>
          <div>
          <input type="number" name="password" placeholder="Nr Ovos" ></input>
          </div>
  
  
        <Select name="category_id" text="Selecione a Especie" options={categories}/>
       <SubmitButton text={"Criar Projeto"} />
      </form>
      </div>
    )
  }export default RegistrarNinhos;