// import mock from '../mock'
// import jwt from 'jsonwebtoken'
// import { Fragment, useState, useContext, useRef } from 'react'
// // api url
// const api_url = "https://srvr1px.cyberads.io/cmgalaxy_users/?user_name=testing&password=Gemsbschool"
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url)
//     // Storing data in form of JSON
//     const data1 = await response.json()
//     console.log(data1)
//     localStorage.setItem('userlogin', JSON.stringify(data1))

// }
// // Calling that async function
// getapi(api_url)

// // ! These two secrets shall be in .env file and not in any other file
// const jwtConfig = {
//   secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
//   refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
//   expireTime: '30m',
//   refreshTokenExpireTime: '30m'
// }

// mock.onPost('/jwt/login').reply(request => {
//   const { email, password } = JSON.parse(request.data)

//   let error = {
//     email: ['Something went wrong']
//   }

//   const user = data.users.find(u => u.email === email && u.password === password)

//   if (user) {
//     try {
//       const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })
//       const refreshToken = jwt.sign({ id: user.id }, jwtConfig.refreshTokenSecret, {
//         expiresIn: jwtConfig.refreshTokenExpireTime
//       })

//       const userData = { ...user }

//       delete userData.password

//       const response = {
//         userData,
//         accessToken,
//         refreshToken
//       }

//       return [200, response]
//     } catch (e) {
//       error = e
//     }
//   } else {
//     error = {
//       email: ['Email or Password is Invalid']
//     }
//   }

//   return [400, { error }]
// })

// mock.onPost('/jwt/register').reply(request => {
//   if (request.data.length > 0) {
//     const { email, password, username } = JSON.parse(request.data)
//     const data = JSON.parse(localStorage.getItem('userlogin'))
//     const isEmailAlreadyInUse = data.users.find(user => user.email === email)
//     const isUsernameAlreadyInUse = data.users.find(user => user.username === username)
//     const error = {
//       email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
//       username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
//     }

//     if (!error.username && !error.email) {
//       const userData = {
//         email,
//         password,
//         username,
//         fullName: '',
//         avatar: null,
//         role: 'admin',
//         ability: [
//           {
//             action: 'manage',
//             subject: 'all'
//           }
//         ]
//       }

//       // Add user id
//       const length = data.users.length
//       let lastIndex = 0
//       if (length) {
//         lastIndex = data.users[length - 1].id
//       }
//       userData.id = lastIndex + 1

//       data.users.push(userData)

//       const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })

//       const user = Object.assign({}, userData)
//       delete user['password']
//       const response = { user, accessToken }

//       return [200, response]
//     } else {
//       return [200, { error }]
//     }
//   }
// })

// mock.onPost('/jwt/refresh-token').reply(request => {
//   const { refreshToken } = JSON.parse(request.data)

//   try {
//     const { id } = jwt.verify(refreshToken, jwtConfig.refreshTokenSecret)

//     const userData = { ...data.users.find(user => user.id === id) }

//     const newAccessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn })
//     const newRefreshToken = jwt.sign({ id: userData.id }, jwtConfig.refreshTokenSecret, {
//       expiresIn: jwtConfig.refreshTokenExpireTime
//     })

//     delete userData.password
//     const response = {
//       userData,
//       accessToken: newAccessToken,
//       refreshToken: newRefreshToken
//     }

//     return [200, response]
//   } catch (e) {
//     const error = 'Invalid refresh token'
//     return [401, { error }]
//   }
// })
import mock from '../mock'
import jwt from 'jsonwebtoken'
import { Fragment, useState, useContext, useRef } from 'react'

// api url
//if (localStorage.getItem('userlogin') !== null) {

//}
//localStorage.setItem('accessToken', 'dd5f3089-40c3-403d-af14-d0c228b05cb4')
//localStorage.setItem('refreshToken', '7c4c1c50-3230-45bf-9eae-c9b2e401c767')
// ! These two secrets shall be in .env file and not in any other file
const jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
  expireTime: '10m',
  refreshTokenExpireTime: '10m'
}

mock.onPost('/jwt/login').reply(request => {
  const { email, password } = JSON.parse(request.data)

  let error = {
    email: ['Something went wrong']
  }

//  const data = JSON.parse(localStorage.getItem('userlogin'))
const CryptoJS = require("crypto-js")
 const data = JSON.parse((CryptoJS.AES.decrypt((localStorage.getItem('encrypteddata')), 'encryptionkeysetbyyatinonsep2022')).toString(CryptoJS.enc.Utf8))

  // alert("testing")
  const user = data.users.find(u => u.email === email && u.password === password)

  if (user) {
    try {
      const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })
      const refreshToken = jwt.sign({ id: user.id }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime
      })

      const userData = { ...user }

      delete userData.password

      const response = {
        userData,
        accessToken,
        refreshToken
      }

      return [200, response]
    } catch (e) {
      error = e
    }
  } else {
    error = {
      email: ['Email or Password is Invalid']
    }
  }

  return [400, { error }]
})

mock.onPost('/jwt/register').reply(request => {
  if (request.data.length > 0) {
    const { email, password, username } = JSON.parse(request.data)
    const isEmailAlreadyInUse = data.users.find(user => user.email === email)
    const isUsernameAlreadyInUse = data.users.find(user => user.username === username)
    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
    }

    if (!error.username && !error.email) {
      const userData = {
        email,
        password,
        username,
        fullName: '',
        avatar: null,
        role: 'admin',
        ability: [
          {
            action: 'manage',
            subject: 'all'
          }
        ]
      }

      // Add user id
      const length = data.users.length
      let lastIndex = 0
      if (length) {
        lastIndex = data.users[length - 1].id
      }
      userData.id = lastIndex + 1

      data.users.push(userData)

      const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })

      const user = Object.assign({}, userData)
      delete user['password']
      const response = { user, accessToken }

      return [200, response]
    } else {
      return [200, { error }]
    }
  }
})

mock.onPost('/jwt/refresh-token').reply(request => {
  const { refreshToken } = JSON.parse(request.data)

  try {
    const { id } = jwt.verify(refreshToken, jwtConfig.refreshTokenSecret)

    const userData = { ...data.users.find(user => user.id === id) }

    const newAccessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn })
    const newRefreshToken = jwt.sign({ id: userData.id }, jwtConfig.refreshTokenSecret, {
      expiresIn: jwtConfig.refreshTokenExpireTime
    })

    delete userData.password
    const response = {
      userData,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    }

    return [200, response]
  } catch (e) {
    const error = 'Invalid refresh token'
    return [401, { error }]
  }
})
