import React from 'react'

// styles
import 'components/ui/styles/index.css'

// components
import { Provider } from 'react-redux'

// types
import type { AppProps } from './App.types'

export const App: React.FC<AppProps> = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
)
