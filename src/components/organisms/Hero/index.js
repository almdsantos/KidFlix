import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
  ButtonsItemView,
} from './styles'
import { Text } from '~/components/atoms'
import { Tag, IconButton, WatchButton } from '~/components/molecules'
import { colors } from '~/styles/colors'
import { useDataStore } from '~/services/stores'

export const Hero = ({ item, onDetail }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const { image_url, title, subtitle, type } = item

  const onPressWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.black, 'transparent', colors.black]}>
          {!onDetail && <Text fontFamily="bold">KidFlix</Text>}
          <Tag mt={210}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          {!onDetail && <Text>{subtitle}</Text>}
          <ButtonsView>
            <ButtonsItemView align="flex-start">
              <IconButton label="Favoritos" iconName="add-circle-outline" />
            </ButtonsItemView>
            <ButtonsItemView>
              <WatchButton onPress={onPressWatch} />
            </ButtonsItemView>
            <ButtonsItemView align="flex-end">
              {!onDetail && (
                <IconButton
                  label="Saiba Mais"
                  iconName="information-circle-outline"
                />
              )}
            </ButtonsItemView>
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
