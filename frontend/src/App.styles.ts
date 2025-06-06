import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledToastContainer = styled(ToastContainer)`
  @media (max-width: 768px) {
    top: 1rem;
    bottom: auto;
  }
`
export const StyledInProgress = styled.div`
  position: absolute;
  top: 6rem;
  left: 2rem;
  z-index: 10;
  display: flex;
  color: orange;
`
