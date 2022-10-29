import React from 'react'

// styles
import s from './Menu.css'

// components
import { Link } from 'components/ui/Link'

// types
import type { MenuProps } from './Menu.types'

/**
 * Menu
 * @class Menu
 */
export const Menu: React.FC<MenuProps> = () => {
  return (
    <nav className={s.root}>
      <Link href="/">Home</Link>
      <Link href="/contacts">Contacts</Link>
      <Link href="/contacts" disabled>
        Contacts
      </Link>
      <Link href="/users">Users</Link>
    </nav>
  )
}
