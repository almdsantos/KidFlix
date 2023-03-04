import React from 'react'
import { LogoImage } from './styles'
import logoImage from '../../../../assets/logo.png'

const sizes = {
  small: 100,
  large: 350,
}

export const Logo = ({ size }) => {
  return (
    <LogoImage
      resizeMode="contain"
      source={logoImage}
      size={sizes[size || 'large']}
    />
  )
}
