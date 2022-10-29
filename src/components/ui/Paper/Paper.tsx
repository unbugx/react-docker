import React from 'react'
import cx from 'classnames'

// styles
import s from './Paper.css'

// types
import type { PaperProps } from './Paper.types'

/**
 * Paper
 * @class Paper
 */
export const Paper: React.FC<PaperProps> = ({ className, children }) => {
  return <div className={cx(s.root, className)}>{children}</div>
}
