import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'
import { ListContainer } from './styles'
import { theme } from '~/styles/theme'

export const HomeList = ({ data, title }) => {
  return (
    <ListContainer>
      <Text ml={12} mt={12} fontFamily="black" size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(12),
          paddingBottom: theme.metrics.px(12),
        }}
      />
    </ListContainer>
  )
}
