import React from 'react'
import Title from '../components/title'
import Text from '../components/text'



export default function Home({ data }) {

  return (
    <>
      <Title>Title</Title>
      <Title className="teste">Title</Title>
      <Title>Title <i className="icon">icone</i></Title>


      <Text>Texto</Text>
    </>
  )
}
