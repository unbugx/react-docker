// store
import { splitApi } from '../index'

// types
import type { ApiUsersResponse } from 'store/api/v1/users/types'

const url = '/v1/users/'

const extendedApi = splitApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<ApiUsersResponse, void>({
      query: () => url,
    }),
  }),
})

export const { useGetUsersQuery } = extendedApi
