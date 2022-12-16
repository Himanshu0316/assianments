import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

import styles from "./Main.module.css"

import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
     const navigate = useNavigate();
    const loginPath = () => {
        navigate("/login")
    }

   
  const [user ,setUser] = useState(null)
    useEffect(()=>{

        const getUser = async()=>{
            fetch("http://localhost:8000/auth/login/success",{
                method:"GET",
                credentials:"include",
                headers:{
                  Accept:"application/json",
                  "content-Type":"application/json",
                  "Access-Control-Allow-Credentials":true,
                },
            }).then((res)=>{
                if(res.status ===200) return res.json();
                throw new Error("authentication has been failed")
            }).then((resObject)=>{
                setUser(resObject.user);
                 localStorage.setItem("user",user)
            }).catch((err)=>{
                console.log(err);
            })
        };
        getUser()
    },[])
    return user ? (
        <Box w="100%" className={styles.Box}>
            <div className={styles.Slidebar}>
              <img className={styles.imgP}  src="https://avatars.githubusercontent.com/u/95962613?s=40&v=4" alt="" srcset="" />
              <div className={styles.bottamBar}>
                <p>Himanshu</p>

              </div>
              
              <div className={styles.SlideBar}>
                  <div>
                    <p>Home</p>
                  </div>
                  <div>
                    <p>Calls</p>
                  </div>
                  <div>
                    <p>Queries</p>
                  </div>
                  <div>
                    <p>Avalibilitys</p>
                  </div>
                  <div>
                    <p>Services</p>
                  </div>
                  <div>
                    <p>Payments</p>
                  </div>
                  <div>
                    <p>Analytics</p>
                  </div>
              </div>
            </div>
            <div className={styles.mainCon}>
               <h2 className={styles.headIng}>Availability</h2>
               <div className={styles.sDl}>
                <div className={styles.sDled}>Shadule</div>
                <div className={styles.sDled}>Configuration</div>
               </div>
               <div className={styles.sDl}>
                <button>Default</button>
                <button>Go</button>
                <button>+New Shadule</button>
               </div>
               <hr />
            </div>

        </Box>
    ) : (
        <Flex m="50px" p='2' direction="column" align="center"  >
            <Heading size='md'>If you want to see the content then first login</Heading>
            <Button className={styles.bTn} colorScheme='teal' onClick={loginPath}>Log in</Button>
            
        </Flex>
    )
}

export default Home
