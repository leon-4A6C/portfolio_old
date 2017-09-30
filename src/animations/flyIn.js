import { keyframes } from 'styled-components'

export const flyIn = keyframes`
from {
  transform: translateY(-100%);
}

to {
  transform: translateY(0%);
}
`

export const flyInRev = keyframes`
from {
  transform: translateY(100%);
}

to {
  transform: translateY(0%);
}
`
