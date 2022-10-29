// hooks
import { useRef, useEffect } from 'react'

/**
 * Use previous render value hook
 * @param {any} value Value
 * @returns {*}
 */
export const usePrevious = <T>(value: T): T => {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
