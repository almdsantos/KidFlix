import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xMibNLtAiLeDltSgfRmawFbtFzL.jpg',
    type: 'Desenho',
    title: 'Turma da Monica',
    Subtitle: 'Monica, Cebolinha, Cascão, Magali'
  },
  {
    id: 1,
    image_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8HXkgUBO5OF8ZK9XbY69RM4S5rv.jpg',
    type: 'Desenho',
    title: 'Patrulha Canina',
    subtitle: 'Ryder, Chase, Rubble, Rocky, Zuma, Marshall, Skye'
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title: 'Patrulha Canina',
          subtitle: 'O Filme',
          type: 'Filme',
          image_url:
            'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/56V3xa8ymXzOQLFGsiU9T1sDmfI.jpg',
        }}
      />
      <HomeList title="Desenhos" data={FAKE_DATA_CHARACTERES} />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
