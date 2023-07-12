import React from 'react'
import { ScreenScrollContainer, Hero, GoBack, HomeList } from '~/components'
import { useDataStore } from '~/services/stores'
import { Films } from '../../pages/Films'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <GoBack />
      <HomeList title="Filmes" data={Films} />
    </ScreenScrollContainer>
  )
}
