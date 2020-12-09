import styled from 'styled-components'
import theme from '../theme'

export const Img = styled.img.attrs(props => ({
  rounded: props.circle ? '100%' : props.rounded ? theme.border : '0px',
  shadow: props.shadow === 'sm' ? theme.shadow.sm : props.shadow === 'md' ? theme.shadow.md : theme.shadow.lg,
}))`
  border-radius: ${props => props.rounded};
  box-shadow: ${props => props.shadow}
`
