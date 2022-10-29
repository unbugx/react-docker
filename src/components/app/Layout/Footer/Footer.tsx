import React from 'react'

// styles
import s from './Footer.css'

// components
import { Container } from 'components/app/Layout/Container'

// constants
import { COPYRIGHT_OWNER } from 'constants/index'

// types
import type { FooterProps } from './Footer.types'

const year = new Date().getFullYear()

/**
 * Footer
 * @class Footer
 */
export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={s.root}>
      <Container className={s.content}>
        <div />
        <small className={s.copy}>
          &copy; Copyright {year}, {COPYRIGHT_OWNER}
        </small>
      </Container>
    </footer>
  )
}
