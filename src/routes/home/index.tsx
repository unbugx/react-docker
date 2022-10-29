// constants
import { routePaths } from 'constants/routes'

const action = async () =>
  (
    await import(
      /* webpackChunkName: "root" */
      './action'
    )
  ).action()

export default {
  path: routePaths.ROOT,
  action,
}
