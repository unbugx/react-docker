import React from 'react'

// components
import { Layout } from 'components/app/Layout'

// constants
import { routeNames } from 'constants/routes'

export const action = () => ({
  name: routeNames.CONTACTS,
  component: <Layout>Contacts Page</Layout>,
})
