import React from 'react'

// styles
import s from './Users.css'

// store
import { useGetUsersQuery } from 'store/api/v1/users/users-list'

// types
import type { UsersProps } from './Users.types'

/**
 * Users
 * @class Users
 */
export const Users: React.FC<UsersProps> = () => {
  const { data, isLoading } = useGetUsersQuery()

  // eslint-disable-next-line no-console
  console.log({
    data,
    isLoading,
  })

  return (
    <div className={s.root}>
      <div>Users</div>
    </div>
  )
}
