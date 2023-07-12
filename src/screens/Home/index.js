import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'
import { Films } from '../../pages/Films'
import { Episodeos } from '../../pages/Episodeos'


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
          trailer_url: 'https://www.youtube.com/watch?v=nZmIOiWgrmw',          
        }}
      />
      <HomeList title="Filmes" data={Films} />
      <HomeList title="Desenhos" data={Episodeos} />
    </ScreenScrollContainer>
  )
}
