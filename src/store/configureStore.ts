import { configureStore } from '@reduxjs/toolkit'

// store
import { splitApi } from 'store/api/v1'
import rootReducer from 'store/rootReducer'

export default function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(splitApi.middleware)],
    preloadedState,
  })

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('store/rootReducer', () => {
      // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
      const newRootReducer = require('store/rootReducer').default
      store.replaceReducer(newRootReducer)
    })
  }

  return store
}
