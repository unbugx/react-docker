// constants
import { routePaths } from 'constants/routes'

const action = async () =>
  (
    await import(
      /* webpackChunkName: "users" */
      './action'
    )
  ).action()

export default {
  path: routePaths.USERS,
  action,
}
