import React from 'react'

// components
import { Layout } from 'components/app/Layout'
import { Home } from 'components/pages/Home'

// constants
import { routeNames } from 'constants/routes'

export const action = () => ({
  name: routeNames.ROOT,
  component: (
    <Layout>
      <Home />
    </Layout>
  ),
})
