import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import defaultPic from '../default.jpg'

/*
example: 
<Avatar 
  status="online"
  variant="circle" 
  src="https://pbs.twimg.com/profile_images/1204923110161600515/rVY_VWw5_400x400.jpg"
  size="40px"
/>
*/

const AvatarWrapper = styled.div.attrs(props => ({
  src: props.src || defaultPic,
  variant: props.variant === 'circle' ? '100%' : props.variant === 'square' ? '8px' : '0px',
  size: props.size || '40px'
}))`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => props.variant};
  height: ${props => props.size};
  width: ${props => props.size};
  display: flex;
  align-items: flex-end;
  min-width: 40px;
  min-height: 40px;
  transition: .4s ease;
`

const Icon = styled.div.attrs(props => ({
  status: props.status === 'online' ? 'green' : props.status === 'offline' ? '#626262' : 'black',
  variant: props.variant || false 
}))`
  color: white;
  background-color: ${props => props.status};
  height: 22.5%;
  width: 22.5%;
  min-width: 15px;
  min-height: 15px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.variant ? '2.5%' : '0'};
  margin-left: ${props => props.variant ? '72.5%' : 'auto'};
  transition: .4s ease;
`

export const Avatar = ({src, size, status, variant, className}) => {
  return (
    <AvatarWrapper className={className} src={src} size={size} variant={variant} >
      { status && <Icon status={status} variant={variant}><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M4.262 18.324l-1.42 1.42c-1.77-2.09-2.842-4.79-2.842-7.744s1.072-5.654 2.841-7.745l1.42 1.42c-1.411 1.725-2.261 3.928-2.261 6.325s.85 4.6 2.262 6.324zm17.738-6.324c0 2.397-.85 4.6-2.262 6.324l1.42 1.42c1.77-2.09 2.842-4.79 2.842-7.744s-1.072-5.654-2.842-7.745l-1.42 1.42c1.412 1.725 2.262 3.928 2.262 6.325zm-16.324-7.738c1.724-1.412 3.927-2.262 6.324-2.262s4.6.85 6.324 2.262l1.42-1.42c-2.091-1.77-4.791-2.842-7.744-2.842-2.954 0-5.654 1.072-7.744 2.842l1.42 1.42zm12.648 15.476c-1.724 1.412-3.927 2.262-6.324 2.262s-4.6-.85-6.324-2.262l-1.42 1.42c2.09 1.77 4.79 2.842 7.744 2.842 2.953 0 5.653-1.072 7.744-2.842l-1.42-1.42z"/></svg></Icon> }
    </AvatarWrapper>
  )
}


Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.string,
  variant: PropTypes.string
}
