import React from 'react'
import cx from 'classnames'

// styles
import s from './Container.css'

// types
import type { ContainerProps } from './Container.types'

/**
 * Container
 * @class Container
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
  dataAuto,
}) => {
  return (
    <Component className={cx(s.container, className)} data-auto={dataAuto}>
      {children}
    </Component>
  )
}
