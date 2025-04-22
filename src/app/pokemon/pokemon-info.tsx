'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { pokemonOptions } from '@/app/pokemon'
import Image from 'next/image'

export function PokemonInfo() {
  const { data } = useSuspenseQuery(pokemonOptions)
  // console.log('PokemonInfo 渲染环境:', typeof window === 'undefined' ? '服务器' : '客户端')

  return (
    <div>
      <figure>
        <Image src={data.sprites.front_shiny} width={200} height={200} alt={data.name} priority />
        <h2>I&apos;m {data.name}</h2>
      </figure>
    </div>
  )
}