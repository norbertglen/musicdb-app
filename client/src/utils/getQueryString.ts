export default function getQueryString(queryObject: {[key: string]: number | string}) {
    let queryString = ''
    for (let i = 0; i < Object.keys(queryObject).length; i += 1) {
      const key = Object.keys(queryObject)[i]
      const value = queryObject[key]
      queryString +=
        queryString.length === 0 ? `?${key}=${value}` : `&${key}=${value}`
    }
    return queryString
  }
  