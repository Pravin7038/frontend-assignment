import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    }

    // axios.post(`https://deploy-server-assignment.onrender.com/users/register`,obj).then((res)=>{

    // console.log(res.data)

    // })
    fetch('https://deploy-server-assignment.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       
        <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Login