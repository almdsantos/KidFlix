import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xMibNLtAiLeDltSgfRmawFbtFzL.jpg',
  },
  {
    id: 1,
    image_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8HXkgUBO5OF8ZK9XbY69RM4S5rv.jpg',
  },
  
]
export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}
