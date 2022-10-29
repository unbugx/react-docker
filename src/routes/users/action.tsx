import React from 'react'

// components
import { Layout } from 'components/app/Layout'
import { Users } from 'components/pages/Users'

// constants
import { routeNames } from 'constants/routes'

export const action = () => ({
  name: routeNames.USERS,
  component: (
    <Layout>
      <Users />
    </Layout>
  ),
})
