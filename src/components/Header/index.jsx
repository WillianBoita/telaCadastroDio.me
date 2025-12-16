import React from 'react'
import { HeaderWrapper, ButtonWrapper, Button, HomeButton } from './styles'

export default function Header() {
  return (
    <HeaderWrapper>
      <img src='../../../logo-dio 1.png'/>
      <ButtonWrapper>
        <HomeButton >Home</HomeButton>
        <Button >Entrar</Button>
        <Button >Cadastrar</Button>
      </ButtonWrapper>
    </HeaderWrapper>
  )
}
