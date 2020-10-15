import React from 'react'
import { H1 } from './style'




export default function Title({children, className}) {


  return <H1 className={ className } readOnly={true} >{ children }</H1>

}
