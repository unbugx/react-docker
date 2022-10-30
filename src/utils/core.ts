// eslint-disable-next-line no-promise-executor-return
export const doDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getBasePath = () => ''

// returns path relative to basePath
export const getPath = (url: string) => url.replace(getBasePath(), '')

export const inIframe = () => {
  try {
    return window.self !== window.top
  } catch (e) {
    return true
  }
}
