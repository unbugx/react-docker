import React from 'react'

// styles
import s from './Layout.css'

// components
import { Paper } from 'components/ui/Paper'
import { Container } from './Container'
import { Footer } from './Footer'
import { Menu } from './Menu'

// types
import type { LayoutProps } from './Layout.types'

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={s.root}>
    <Container as="header">
      <Menu />
    </Container>
    <Container className={s.container} as="main">
      <Paper className={s.content}>{children}</Paper>
    </Container>
    <Footer />
  </div>
)
