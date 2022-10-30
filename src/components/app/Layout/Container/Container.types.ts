// types
import type React from 'react'
import type { QaPropsOptional } from 'types/qa'

export type ContainerProps = QaPropsOptional & {
  className?: string
  as?: React.ElementType
  children?: React.ReactNode
}
