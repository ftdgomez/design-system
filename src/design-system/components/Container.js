import styled from 'styled-components'

export const Container = styled.div.attrs(props => ({
  size:
    props.size === 'sm' ? '680px'
    : props.size === 'md' ? '890px'
    : props.size === 'lg' ? '1024px'
    : props.size === 'full' ? '100%'
    : '1024px'
}))`
  max-width: ${props => props.size};
  margin: auto;
  padding: 0 1em;
`
