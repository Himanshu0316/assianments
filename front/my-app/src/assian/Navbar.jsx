import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import styles from "./Main.module.css"
const Navbar = () => {
    var token = localStorage.getItem("token");
    const navigate = useNavigate();
    const loginPath = () => {
        navigate("/login")
    }
    const logoutPath = () => {
       window.open("http://localhost:8000/auth/logout","_self") 
        navigate("/")
    }
    var user = localStorage.getItem("user")
    return (
        <Box>
            <Flex bg="dodgerblue" color="white">
                <Box p='4' >
                    <NavLink className={styles.Link} to="/">Home</NavLink>
                </Box>
                <Spacer />
                <Box p='4'>
                    {user ? <Button className={styles.bTn} colorScheme='teal' onClick={logoutPath} >Log out</Button> : <Button className={styles.bTn} onClick={loginPath} colorScheme='teal'>Log in</Button>}

                </Box>
            </Flex>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />

            </Routes>
        </Box>
    )
}

export default Navbar
