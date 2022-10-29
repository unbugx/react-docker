import React from 'react'

// components
import { Layout } from 'components/app/Layout'

// constants
import { routeNames } from 'constants/routes'

export const action = () => ({
  name: routeNames.NOT_FOUND,
  component: <Layout>404 Page</Layout>,
  status: 404,
})
