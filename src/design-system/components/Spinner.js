import styled, {keyframes} from 'styled-components'
import theme from '../theme'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  70% {
    transform: rotate(250deg);
  }

  100% {
    transform: rotate(360deg);
  }
`


const SpinContainer = styled.span.attrs(props => ({
  size: props.size || 16
}))`
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    display: inline-flex;
    margin: 0 4px;
`

const Spin = styled.span.attrs(props => ({
  size: props.size ? props.size * 0.10 : 2,
  variant: theme.color[props.variant] || '#fafafa',
}))` 
    animation: ${rotate} 1s linear infinite;
    height: 100%;
    width: 100%;
    display: inline-block;
    border-radius: 100%;
    border-top: ${props => props.size}px solid ${props => props.variant}02;
    border-right: ${props => props.size}px solid ${props => props.variant}10;
    border-bottom: ${props => props.size}px solid ${props => props.variant}20;
    border-left: ${props => props.size}px solid ${props => props.variant};
`

export const Spinner = ({ size, variant }) => {
  return (
    <SpinContainer size={size}>
      <Spin size={size} variant={variant}></Spin>
    </SpinContainer>
  )
}
