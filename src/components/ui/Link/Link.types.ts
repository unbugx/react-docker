// types
import type React from 'react'

export type LinkProps = {
  href: string
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
  disabled?: boolean
  children?: React.ReactNode
}
