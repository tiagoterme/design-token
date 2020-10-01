import React, { useState } from 'react'
import { Text, Title, Button } from '../components'
import { useAuth } from '../contexts/authContext'

export default function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { login } = useAuth()

  function handleSubmit() {
    login(username, password)
  }

  return (
    <>
      <Title>Login</Title>
      <div>
        <Text>Usuário</Text>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Text>Senha</Text>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Submit" primary={true} onClick={handleSubmit} />
      </div>
    </>
  )
}
