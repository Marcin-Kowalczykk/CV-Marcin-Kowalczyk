import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledToastContainer = styled(ToastContainer)`
  @media (max-width: 768px) {
    top: 1rem;
    bottom: auto;
  }
`
