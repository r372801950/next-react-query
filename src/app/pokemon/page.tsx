import React from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { pokemonOptions } from '@/app/pokemon'
import { getQueryClient } from '@/app/get-query-client'
import { PokemonInfo } from './pokemon-info'

export default function Home() {
  const queryClient = getQueryClient()

  // // 添加日志来查看缓存状态
  // async function debugPrefetch() {
  //   console.log('缓存状态(prefetch前):', queryClient.getQueryCache().getAll());
  //
  //   await queryClient.prefetchQuery(pokemonOptions);
  //
  //   console.log('缓存状态(prefetch后):', queryClient.getQueryCache().getAll());
  //   console.log('具体数据:', queryClient.getQueryData(['pokemon']));
  // }
  //
  // debugPrefetch();

  void queryClient.prefetchQuery(pokemonOptions)

  return (
    <main>
      <h1>Pokemon Info</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonInfo />
      </HydrationBoundary>
    </main>
  )
}