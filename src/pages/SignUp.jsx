import React, { useState } from 'react'

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [age, setAge] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      password,
      age,
      city
    }

    // axios.post(`https://deploy-server-assignment.onrender.com/users/register`,obj).then((res)=>{

    // console.log(res.data)

    // })
    fetch('https://deploy-server-assignment.onrender.com/users/register', {
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
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input type="text" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)}></input>
        <input type="text" placeholder='city' value={city} onChange={(e) => setCity(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SignUp