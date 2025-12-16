import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  color: white;
  width: 100vw;
  height: 7vh;
  background-color: black;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 8px;
`

export const Button = styled.button`
  background-color: gray;
  color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 85px;
  height: 20px;
  cursor: pointer;
`
export const HomeButton = styled(Button)`
  background-color: black;
  width: fit-content;
`