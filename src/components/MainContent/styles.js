import styled from "styled-components";

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  margin-top: 88px;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 400px;
  gap: 12px;
  height: 60vh;
`

export const MainText = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: white;
  width: 28%;
  height: fit-content;
  align-self: flex-start;
`

export const FormTitle = styled(MainText)`
  width: 100%;
`

export const FormDescription = styled.p`
  color: white;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 4px;
  max-width: 350px;
`

export const InputWrapper = styled.div`
  border-bottom: 0.1px solid gray;
  display: flex;
  gap: 4px;
  padding: 4px;
  width: 80%;
`

export const Input = styled.input`
  background-color:  #1E192C;
  color: white;
  border: 0;
  padding: 2px;
  margin-left: 2px;
  font-size: 18px;
  font-weight: 400;
`
export const InputImage = styled.img`
  height: auto;
  object-fit: contain;
`

export const SubmitButtonContainer = styled.div`
  border-radius: 20px;
  border: 1px solid #E4105D;
  width: 80%;
  margin-top: 8px;
`

export const SubmitButton = styled.button`
  background-color: #E4105D;
  border: 4px solid #1E192C;
  color: white;
  padding: 4px;
  border-radius: 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
`

export const LoginSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

export const LoginText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: white;
`

export const LoginTextLink = styled.a`
  font-size: 14px;
  font-weight: 700;
  color: #23DD7A;
`