// types
import type React from 'react'
import type { EnhancedStore } from '@reduxjs/toolkit'

export type AppProps = {
  store: EnhancedStore<State>
  children?: React.ReactNode
}
