import styled from 'styled-components'
import theme from '../theme'

export const Title = styled.div.attrs(props => ({
  transform: props.transform || 'inherit',
  size: props.size === 'xl' ? '46px'
    : props.size === 'lg' ? '32px'
    : props.size === 'md' ? '24px'
    : props.size === 'sm' ? '18px'
    : '32px'
}))`
  font-size: ${props => props.size};
  text-transform: ${props => props.transform};
  color: ${theme.color.text}
`
