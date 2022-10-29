import { Route, RouteContext } from 'universal-router'
import home from './home'
import contacts from './contacts'
import users from './users'
import notFound from './notFound'

const routes = [{ ...home }, { ...contacts }, { ...users }, { ...notFound }]

const rootRoute: Route = {
  path: '',
  children: routes,
  async action(context: RouteContext) {
    // Do action when navigation starts

    const children = await context.next()

    // Do action when navigation ends

    return {
      component: children,
    }
  },
}

export default rootRoute
