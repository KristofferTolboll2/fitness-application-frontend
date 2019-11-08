export const createRedirect = (history, baseUrl, param) =>{
    return history.push(`${baseUrl}/${param}`)
}