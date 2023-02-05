
import React from 'react'
import { Layout } from '@/components/layouts';
import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from 'api';
import { PokemonListResponse, SmallPokemon } from 'interfaces';
import { Card, Grid, Row, Text, Image } from '@nextui-org/react';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons'>
      <>
        <Image src="/imgs/banner.png" width={300} height={250} />
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
      </>
    </Layout>
  )
}

export const getServerSideProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => (
    {
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i + 1}.png`
    }
  ));

  return {
    props: {
      pokemons
    },
  }
}
export default HomePage;
