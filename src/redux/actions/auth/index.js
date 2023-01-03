// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = data => {
  return dispatch => {
    dispatch({
      type: 'LOGIN',
      data,
      config,
      [config.storageTokenKeyName]: data[config.storageTokenKeyName],
      [config.storageRefreshTokenKeyName]: data[config.storageRefreshTokenKeyName]
    })

    // ** Add to user, accessToken & refreshToken to localStorage
    localStorage.setItem('userData', JSON.stringify(data))
    localStorage.setItem(config.storageTokenKeyName, JSON.stringify(data.accessToken))
    localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(data.refreshToken))
    
    const d = new Date()
    d.setDate(d.getDate() - 7)
    const d1 = new Date()
    d1.setDate(d1.getDate() - 1)

    localStorage.setItem("sy", d.getFullYear())
    localStorage.setItem("sm", d.getMonth() + 1)
    localStorage.setItem("sd", d.getDate())
    localStorage.setItem("ey", d1.getFullYear())
    localStorage.setItem("em", d1.getMonth() + 1)
    localStorage.setItem("ed", d1.getDate())
    // sessionStorage.setItem("nam", "Overall Snapshot")

  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    dispatch({ type: 'LOGOUT', [config.storageTokenKeyName]: null, [config.storageRefreshTokenKeyName]: null })

    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.removeItem('userData')
    localStorage.removeItem('sd')
    localStorage.removeItem('sm')
    localStorage.removeItem('sy')
    localStorage.removeItem('ed')
    localStorage.removeItem('em')
    localStorage.removeItem('ey')
    localStorage.removeItem(config.storageTokenKeyName)
    localStorage.removeItem(config.storageRefreshTokenKeyName)
  }
}
