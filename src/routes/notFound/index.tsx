// constants
import { routePaths } from 'constants/routes'

const action = async () =>
  (
    await import(
      /* webpackChunkName: "not-found" */
      './action'
    )
  ).action()

export default {
  path: routePaths.NOT_FOUND,
  action,
}
