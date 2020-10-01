import React from 'react'
import { Text, Title, Button } from '@/components'
import { useRouter } from 'next/router'

export default function Home({ data }) {
  const router = useRouter()

  function goToAuthenticated() {
    router.push('/authenticated')
  }

  return (
    <>
      <Title>Title</Title>
      <Text>Meu textinho</Text>
      <Button label="Rota autenticada" primary={true} onClick={goToAuthenticated}/>
    </>
  )
}
