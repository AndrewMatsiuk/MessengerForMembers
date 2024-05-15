export const localStorageObj = {
  add: (key: string, data: unknown) => {
    let storageData = data as string
    if (typeof data === 'object') {
      storageData = JSON.stringify(data)
    }
    localStorage.setItem(key, storageData)
  },

  get: (key: string) => {
    return localStorage.getItem(key)
  },
}
