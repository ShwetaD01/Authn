"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {axios} from 'axios';


function Login() {
    
        const [user, serUser] = useState({
            // email: "",
            password: "",
            username: ""
        })
    
        const onLogin = () =>{
    
        }
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 m-5">
            
            <label htmlFor="username" >Username</label>
          <input  type="text" 
          id="username" 
          value={user.username}
          onChange={(e) => serUser({...user, username: e.target.value})}
          placeholder="Username"
          ></input>
    
            {/* <label htmlFor="email">Email</label>
          <input  type="text" 
          id="email" 
          value={user.email}
          onChange={(e) => serUser({...user, email: e.target.value})}
          placeholder="Email"
          ></input>
           
           */}
          <label htmlFor="password">Password</label>
          <input  type="password" 
          id="password" 
          value={user.password}
          onChange={(e) => serUser({...user, password: e.target.value})}
          placeholder="Password"
          ></input>
        <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg m-4 ">Submit</button>
        <Link href="/signup">Visit Sign page</Link>
          
        </div>
      )
    }
    

export default Login;
