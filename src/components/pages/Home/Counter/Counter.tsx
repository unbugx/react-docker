import React from 'react'

// hooks
import { useDispatch, useSelector } from 'react-redux'

// store
import { increase, decrease, reset } from 'store/slices/counter'

// types
import type { CounterProps } from './Counter.types'

export const Counter: React.FC<CounterProps> = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: State) => state.counter.counter)

  return (
    <div>
      Counter: <b>{counter}</b>
      <div>
        <button type="button" onClick={() => dispatch(increase())}>
          +1
        </button>
        <button type="button" onClick={() => dispatch(decrease())}>
          -1
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          reset
        </button>
      </div>
    </div>
  )
}
