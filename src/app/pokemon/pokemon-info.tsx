'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { pokemonOptions } from '@/app/pokemon'

export function PokemonInfo() {
  const { data } = useSuspenseQuery(pokemonOptions)
  console.log('PokemonInfo 渲染环境:', typeof window === 'undefined' ? '服务器' : '客户端')

  return (
    <div>
      <figure>
        <img src={data.sprites.front_shiny} height={200} alt={data.name} />
        <h2>I'm {data.name}</h2>
      </figure>
    </div>
  )
}