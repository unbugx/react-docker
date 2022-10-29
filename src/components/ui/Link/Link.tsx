import React from 'react'
import cx from 'classnames'

// styles
import s from './Link.css'

// utils
import history from 'utils/history'
import { getBasePath } from 'utils/core'

// types
import type { LinkProps } from './Link.types'

export const Link: React.FC<LinkProps> = ({
  href = '',
  onClick,
  className,
  disabled,
  children,
  ...restProps
}) => {
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()

      if (disabled) {
        return
      }

      if (onClick) {
        onClick(event)
      }

      history.push(`${getBasePath()}${href}`)
    },
    [disabled, onClick],
  )

  return (
    <a
      className={cx(className, s.link, { [s.disabled]: disabled })}
      href={`${getBasePath()}${href}`}
      onClick={handleClick}
      rel="noopener noreferrer"
      {...restProps}
    >
      {children}
    </a>
  )
}
