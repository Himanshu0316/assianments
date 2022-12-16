import { Container } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from "./Main.module.css"
const Login = () => {
   const google = ()=>{
    window.open("http://localhost:8000/auth/google","_self")
   }

    return (
        <Container marginTop="50px">
          <div onClick={google}>google</div>
       
        </Container>
    )
}

export default Login
