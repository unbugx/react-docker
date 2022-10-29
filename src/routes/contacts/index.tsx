// constants
import { routePaths } from 'constants/routes'

const action = async () =>
  (
    await import(
      /* webpackChunkName: "contacts" */
      './action'
    )
  ).action()

export default {
  path: routePaths.CONTACTS,
  action,
}
