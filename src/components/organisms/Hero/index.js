import React from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { Text } from '~/components/atoms'
import { Tag, IconButton } from '~/components/molecules'
import { colors } from '~/styles/colors'

export const Hero = ({ item, onDetail }) => {
  const { image_url, title, subtitle, type } = item
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url
        }}
      >
        <HeroGradient colors={[colors.black, 'transparent', colors.black]}>
          {!onDetail && <Text fontFamily="bold">KidFlix</Text>}
          <Tag mt={200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={28}>{subtitle}</Text>
          <ButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            {!onDetail && (
              <IconButton
                label="Saiba Mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}