import styled from 'styled-components'
import theme from '../theme'

export const Div = styled.div.attrs(props => ({
  display: props.flex ? 'flex' : 'block',
}))`
  display: ${props => props.display};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  font-size: ${props => props.size};
  color: ${theme.color.text}
`
