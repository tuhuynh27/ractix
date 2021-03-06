// ------ ROUTER FUNCTIONS ---------
export function cleanPath(path: string) {
  // remove leading/trailing slashes + hash symbol
  // e.g: '#////posts/:id///' -> posts/:id
  return path.replace(/^[\#]*[\/]*(.*)/, '$1').replace(/\/+$/, '')
}

export function getParam(paramName: string, url: string) {
  const href = url || window.location.href
  const name = paramName.replace(/[[]]/g, '\\$&')
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(href)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

// -------- COMMON FUNCTIONS ----------
export function convertToArray(arr: any): any {
  return [...arr]
}

export function isObject(obj: any) {
  return typeof obj === 'object'
}

export function includes(arr: any, id: string | number) {
  return arr.indexOf(id) !== -1
}
