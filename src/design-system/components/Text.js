import styled from 'styled-components'
import theme from '../theme'

export const Text = styled.p.attrs(props => ({
  transform: props.transform || 'inherit',
  size: props.size === 'xl' ? '1.5rem'
    : props.size === 'lg' ? '1.3125rem'
    : props.size === 'md' ? '1rem'
    : props.size === 'sm' ? '0.875rem'
    : '1rem',
  muted: props.muted
}))`
  font-size: ${props => props.muted ? '0.8125rem' : props.size};
  color: ${theme.color.text};
  opacity: ${props => props.muted && '.7'}
`
