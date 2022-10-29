/* eslint-disable no-unused-vars */
// store
import rootReducer from 'store/rootReducer'

declare global {
  declare module '*.css' {
    const content: { [className: string]: string }
    export default content
  }

  type State = ReturnType<typeof rootReducer>

  // interface EnvVariables {}

  // interface Window extends EnvVariables {}

  // type AppDispatch = typeof store.dispatch

  interface Global {
    window: Window
    // process: {
    //   env: EnvVariables
    // }
  }

  declare const global: Global
}
