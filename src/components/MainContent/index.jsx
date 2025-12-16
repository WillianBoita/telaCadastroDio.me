import React from 'react'
import { MainContentWrapper, FormWrapper, MainText, FormTitle, FormDescription, InputWrapper, Input, InputImage, SubmitButton, SubmitButtonContainer, LoginText, LoginTextLink, LoginSection } from './styles'

export default function MainContent() {
  return (
    <MainContentWrapper>
      <MainText>
        A plataforma para você aprender com experts, 
        dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
      </MainText>
      <FormWrapper>
        <FormTitle>Comece agora grátis</FormTitle>
        <FormDescription>Crie sua conta e make the change._</FormDescription>
        <InputWrapper>
          <InputImage src='../../../Vector.png'/>
          <Input placeholder='Nome Completo'/>
        </InputWrapper>
        <InputWrapper>
          <InputImage src='../../../email.png'/>
          <Input placeholder='E-mail'/>
        </InputWrapper>
        <InputWrapper>
          <InputImage src='../../../password.png'/>
          <Input placeholder='Password'/>
        </InputWrapper>
        <SubmitButtonContainer>
          <SubmitButton>Criar Minha Conta</SubmitButton>
        </SubmitButtonContainer>
        <FormDescription>
          Ao clicar em "criar minha conta grátis", 
          declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </FormDescription>
        <LoginSection>
          <LoginText>Já tenho conta.</LoginText>
          <LoginTextLink>Fazer Login</LoginTextLink>
        </LoginSection>
      </FormWrapper>
    </MainContentWrapper>
  )
}
