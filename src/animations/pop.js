import { keyframes } from 'styled-components'

export const popIn = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.05);
  }

  90% {
    transform: scale(0.98);
  }

  100% {
    transform: scale(1);
  }
`
