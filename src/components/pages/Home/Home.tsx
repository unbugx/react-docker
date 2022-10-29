import React from 'react'

// components
import { Counter } from './Counter'

// types
import type { HomeProps } from './Home.types'

/**
 * Home
 * @class Home
 */
export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div>Home Page</div>
      <Counter />
    </>
  )
}
