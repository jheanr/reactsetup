import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 54px;
    margin-top: 40px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 24px;
  }
`
