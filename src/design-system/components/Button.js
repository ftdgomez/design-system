import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import theme from '../theme'
import { Spinner } from './Spinner';

const Btn = styled.button.attrs(props => ({
  variant: theme.color[props.variant] || theme.color.primary,
  rounded: props.rounded || 0,
  size: 
    props.size === 'sm' ? '.8em'
    : props.size === 'md' ? '1em'
    : props.size === 'lg' ? '1.2em'
    : props.size === 'xl' ? '1.4em'
    : '1em',
  width: props.fullwidth ? '100%' : 'auto'
}))`
  background-color: ${props => props.variant};
  border: none;
  padding: calc(${props => props.size} / 2) ${props => props.size};
  font-size: calc(${props => props.size} * 1);
  border-radius: ${props => props.rounded}px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transform: scale(1);
  width: ${props => props.width};
  &:hover{
    background-color: ${props => props.variant}95;
  }
  &:active{
    background-color: ${props => props.variant};
  }
  &:focus{
    border: none;
    outline: none;
  }
  &:disabled{
    background-color: rgb(165, 173, 186);
    cursor: not-allowed;
  }
`

const SpinnerBtnContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = ({ children, variant, rounded, loading, disabled, onClick, size, fullwidth, className }) => {
  return (<Btn
            variant={variant}
            rounded={rounded}
            onClick={onClick}
            disabled={disabled}
            size={size}
            fullwidth={fullwidth}
            className={className}
          >
            <span style={{opacity: loading ? '0' : '1'}}>{children}</span>
            {loading && <SpinnerBtnContainer> <Spinner /> </SpinnerBtnContainer>}
          </Btn>)
}

Button.propTypes = {
  variant: PropTypes.string,
  rounded: PropTypes.number,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string
}
