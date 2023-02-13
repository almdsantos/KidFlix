import React from 'react';
import { LogoImage } from './styles';
import logoImage from '../../../../assets/logo.png';

export const Logo = () => {
  return <LogoImage resizeMode="contain" source={logoImage} />
}
